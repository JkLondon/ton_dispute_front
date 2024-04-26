import {Button, Info, List, Section, Skeleton, Spinner} from "@xelene/tgui";
import {useTonConnect} from "../hooks/useTonConnect";
import {useJettonContract} from "../hooks/useJettonContract";
import {FC, ReactNode, useEffect, useState} from "react";
import {Outcome, Referee} from "../../build/Dispute/tact_Dispute";
import {Dictionary, fromNano} from "@ton/core";
import {Input} from "@xelene/tgui";
import {BetBlock} from "./BetBlock";
import {BetInfo} from "./BetInfo";
import {VoteBlock} from "./VoteBlock";

export type DisputeData = {
	wallet: string;
	name: string;
	description: string;
	fees: string;
	outcomes: Dictionary<bigint, Outcome>;
	referees: Dictionary<bigint, Referee>;
	bet: (outcomeId: bigint) => void;
}

function prepareDisputeData(): DisputeData | null {
	const {connected, wallet} = useTonConnect()
	const {referees, bank, name, description,
		bet, vote, claim, contractAddress, fees, isVoted, outcomes} = useJettonContract()
	const [betOutcomeID, setBetOutcomeID] = useState(0);
	const [voteOutcomeID, setVoteOutcomeID] = useState(0);
	const [voteRefereeID, setVoteRefereeID] = useState(0);
	const [claimBetID, setClaimBetID] = useState(0);

	if (wallet && name && description && fees && outcomes && referees) {
		const feesFormatted = fromNano(fees.flat || 0) + ", " + fees.percent + "%";

		return {
			wallet: wallet,
			name: name,
			description: description,
			fees: feesFormatted,
			outcomes: outcomes,
			referees: referees,
			bet: (outcomeId) => {
				bet(outcomeId)
			}
		}
	}
	return null
}

export type DisputeFragmentState = {
	selectedOutcome: bigint | null
	selectedAmount: number | null
}


const DisputeFragment = () => {
	const model = prepareDisputeData()
	const [state, setState] = useState<DisputeFragmentState>({
		selectedOutcome: null,
		selectedAmount: null
	})

	useEffect(() => {
		console.log('DEBUG' + state);
	}, [state.selectedOutcome]);  // Dependency array includes only 'selectedOutcome' if that's all you care to log

	const handleSelect = (item: bigint) => {
		setState(prevState => ({
			...prevState,
			selectedOutcome: item
		}));
		console.log('Selected item:', item);  // Logs the item being selected
		console.log('State after initiating update:', state);  // Logs state which might not be updated yet
	};

	if (model) {
		const outcomes = model.outcomes
		return (
			<>
				<Skeleton>
					<BetInfo {...model}/>
				</Skeleton>

				<VoteBlock
					onSelect={(item) => handleSelect(item)}
					data={model}
				/>
				<BetBlock onBet={ (amount) => {
					if (state.selectedOutcome) {
						model.bet(state.selectedOutcome);
					}
				}
				}/>

				<Section header="Claim">
					<div className="flex flex-col gap-2.5 p-4">
						<Input
							placeholder="Claim amount"
							className="flex-grow"
							after={
								<Button size="s">Claim</Button>
							}
						/>
					</div>
				</Section>
			</>
		)
	} else {
		return (
			<div
				className="flex h-auto place-content-center"
			>
				<Spinner size="l"/>
				<br/>
			</div>
		)
	}
}

export const RootDisputeView = () => {
	return (
		<List
			style={{
				background: 'var(--tgui--secondary_bg_color)',
			}}
		>
			<DisputeFragment />
		</List>
		)
}
