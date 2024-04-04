import { useEffect, useState } from "react";
import { Address, OpenedContract, toNano } from "@ton/core";
import {Dispute, Fees, Outcome, PlayerBetInit, Referee, Vote} from "../../build/Dispute/tact_Dispute";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import { Dictionary } from "@ton/core";

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

        const contract = Dispute.fromAddress(Address.parse("kQDFv0qHSrdB_CC7rkBMUSotc4wVzoQw48vwvEJw0wRdjN9w"))//"kQBEEFRthzZAtfct2pW8XG_0R-20UEH3C5MIdCCbHCNbdj2x"))

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
    console.log("voted? ", disputeIsVote)


    console.log("disp outcomes", disputeOutcomes)
    return {
        referees: disputeReferees ?? null,
        outcomes: disputeOutcomes ?? null,
        bank: bank,
        name: disputeName ?? null,
        description: disputeDescription ?? null,
        contractAddress: disputeContract?.address?.toString() ?? null,
        fees: disputeFees ?? null,
        isVoted: disputeIsVote ?? null,
        bet0: () => {
            const message: PlayerBetInit = {
                $$type: 'PlayerBetInit',
                outcomeID: 0n,
            }

            disputeContract?.send(sender, {
                value: toNano("7")
            }, message)
        },
        bet1: () => {
            const message: PlayerBetInit = {
                $$type: 'PlayerBetInit',
                outcomeID: 1n,
            }

            disputeContract?.send(sender, {
                value: toNano("7")
            }, message)
        },
        vote0: () => {
            const message: Vote = {
                $$type: 'Vote',
                outcomeID: 0n,
                refereeID: 0n,
            }

            disputeContract?.send(sender, {
                value: toNano("0.2")
            }, message)
        },
        vote1: () => {
            const message: Vote = {
                $$type: 'Vote',
                outcomeID: 1n,
                refereeID: 0n,
            }

            disputeContract?.send(sender, {
                value: toNano("0.2")
            }, message)
        },
        finish: () => {
            disputeContract?.send(sender, {
                value: toNano("1.2")
            }, "finish")
        }
    }
}