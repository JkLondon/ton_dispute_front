import { useEffect, useState } from "react";
import { Address, OpenedContract, toNano } from "@ton/core";
import {Dispute, Fees, Outcome, PlayerBetInit, Referee, Vote} from "../../build/Dispute/tact_Dispute";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import { Dictionary } from "@ton/core";
import { Claim } from "../wrappers/PlayerBet";

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

export function useJettonContract() {
    const {client} = useTonClient()
    const {wallet, sender} = useTonConnect()
    const [bank, setBank] = useState<string | null>()
    const [name, setName] = useState<string | null>()
    const [description, setDescription] = useState<string | null>()
    const [fees, setFees] = useState<Fees | null>()
    const [referees, setReferees] = useState<Dictionary<bigint, Referee> | null>()


    const disputeContract = useAsyncInitialize(async()=>{
        if(!client || !wallet) return;

        const contract = Dispute.fromAddress(Address.parse("EQAmqS3U5jfahc6tUpIH71a0zqSgyaUKwcCKXBmwYTilzzif"))//"kQBEEFRthzZAtfct2pW8XG_0R-20UEH3C5MIdCCbHCNbdj2x"))

        return client.open(contract) as OpenedContract<Dispute>
    }, [client, wallet])

    // const bank = useAsyncInitialize(async()=>{
    //     if(!disputeContract || !client) return;

    //     const disputeReferees = await disputeContract.getBank()

    //     return disputeReferees
    // }, [disputeContract, client])

    useEffect(()=>{
        async function getBank() {
            if(!disputeContract) return 
            setBank(null)
            const bank = await disputeContract.getBank()
            setBank(bank)
            await sleep(50000)
            getBank()
        }

        getBank()

    }, [disputeContract])

    const disputeReferees = useAsyncInitialize(async()=>{
        if(!disputeContract || !client)  return

        const disputeRefereesRaw = await disputeContract.getGetReferees()
        return disputeRefereesRaw as Dictionary<bigint, Referee>
    }, [disputeContract, client])

    const disputeOutcomes = useAsyncInitialize(async()=>{
        if(!disputeContract || !client)  return

        const disputeOutcomesRaw = await disputeContract.getGetOutcomes()
        return disputeOutcomesRaw as Dictionary<bigint, Outcome>
    }, [disputeContract, client])

    const disputeFees = useAsyncInitialize(async()=>{
        if(!disputeContract || !client)  return

        const disputeFeesRaw = await disputeContract.getGetFees()
        return disputeFeesRaw as Fees
    }, [disputeContract, client])

    const disputeName = useAsyncInitialize(async()=>{
        if(!disputeContract || !client) return;

        const name = await disputeContract.getGetName()

        return name
    }, [disputeContract, client])

    const disputeDescription = useAsyncInitialize(async()=>{
        if(!disputeContract || !client) return;

        const description = await disputeContract.getGetDescription()

        return description
    }, [disputeContract, client])

    const disputeIsVote = useAsyncInitialize(async()=>{
        if(!disputeContract || !client) return;

        const disputeIsVotedRaw = await disputeContract.getGetIsVoteFinished()

        return disputeIsVotedRaw as boolean
    }, [disputeContract, client])

    const disputeStartedAt = useAsyncInitialize(async()=>{
        if(!disputeContract || !client) return;

        const disputeStartedAtRaw = await disputeContract.getGetStartedAt()

        return disputeStartedAtRaw as bigint
    }, [disputeContract, client])
    
    const disputeDuration = useAsyncInitialize(async()=>{
        if(!disputeContract || !client) return;

        const disputeDurationRaw = await disputeContract.getGetDuration()

        return disputeDurationRaw as bigint
    }, [disputeContract, client])

    const disputeBetUntil = useAsyncInitialize(async()=>{
        if(!disputeContract || !client) return;

        const disputeBetUntilRaw = await disputeContract.getGetBetUntil()

        return disputeBetUntilRaw as bigint
    }, [disputeContract, client])

    return {
        referees: disputeReferees ?? null,
        outcomes: disputeOutcomes ?? null,
        bank: bank,
        name: disputeName ?? null,
        description: disputeDescription ?? null,
        contractAddress: disputeContract?.address?.toString() ?? null,
        fees: disputeFees ?? null,
        isVoted: disputeIsVote ?? null,
        startedAt: disputeStartedAt ?? null,
        duration: disputeDuration ?? null,
        betUntil: disputeBetUntil ?? null,
        bet: (outcomeID: bigint) => {
            const message: PlayerBetInit = {
                $$type: 'PlayerBetInit',
                outcomeID: outcomeID,
            }

            disputeContract?.send(sender, {
                value: toNano("1")
            }, message)
        },
        vote: (outcomeID: bigint, refereeID: bigint) => {
            const message: Vote = {
                $$type: 'Vote',
                outcomeID: outcomeID,
                refereeID: refereeID,
            }

            disputeContract?.send(sender, {
                value: toNano("0.2")
            }, message)
        },
        claim: (betID: bigint) => {
            const message: Claim = {
                $$type: 'Claim',
                seqno: betID,
            }
            disputeContract?.send(sender, {
                value: toNano("0.5")
            }, message)
        },
    }
}

interface DisputeInformation {
    referees: Dictionary<bigint, Referee>;
    outcomes: Dictionary<bigint, Outcome>;
    bank: string;
    name: string;
    description: string;
    contractAddress: string;
    fees: string;

}

export function useDisputeContract() {
}