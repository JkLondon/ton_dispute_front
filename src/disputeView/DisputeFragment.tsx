import {Button, Info, List, Section, Skeleton, Spinner} from "@xelene/tgui";
import {TextBlock} from "../components/TextBlock";
import {Label} from "../components/Label";
import {useTonConnect} from "../hooks/useTonConnect";
import {useJettonContract} from "../hooks/useJettonContract";
import {FC, ReactNode, useState} from "react";
import InputWithButton from "../components/InputWithButton";
import {Chip, Cell, Selectable, Radio} from "@xelene/tgui";
import {ButtonGrid} from "../components/ButtonGrid";
// import Input from "./components/Input";
import {Outcome, Referee} from "../../build/Dispute/tact_Dispute";
import {Dictionary, fromNano} from "@ton/core";
import {Input} from "@xelene/tgui";

type DisputeData = {
	wallet: string;
	name: string;
	description: string;
	fees: string;
	outcomes: Dictionary<bigint, Outcome>;
	referees: Dictionary<bigint, Referee>;
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
			referees: referees
		}
	}
	return null
}

const BetInfo: FC<DisputeData> = (props) => {
	const referees = Array.from(props.referees).map(([key, value], index) => (
		<Cell Component="label" before={(index+1).toString() + '.'}>
			{value.address.toString()}
		</Cell>
	));

	return (
		<Section header="Dispute information">
			<div className="p-4 flex flex-col gap-2.5">
				<Label text="Wallet">
					<TextBlock>
						{props.wallet}
					</TextBlock>
				</Label>

				<Label text="Name">
					<TextBlock>
						{ props.name }
					</TextBlock>
				</Label>

				<Label text="Description">
					<TextBlock>
						{ props.description }
					</TextBlock>
				</Label>

				<Label text="Fees">
					<TextBlock>
						{ props.fees }
					</TextBlock>
				</Label>

				<Label text="Referees">
					{ referees }
				</Label>
			</div>
		</Section>
	)
}

export function BetBlock() {
	const buttonList = [1, 5, 10, 20]
	let [value, setValue] = useState("");

	const buttons = buttonList.map((curr) => (
		<Button mode="outline" onClick={() => {
			setValue((Number(value) + curr).toString())
		}}>
			{curr}
		</Button>
	))


	return (
		<Section>
		<div className="flex flex-col gap-2.5 p-4">
			<Input
				value={value}
				onChange={e => setValue(e.target.value)}
				type='number'
				placeholder="Your bet size"
				after={
					<Info
						subtitle="Subtitle"
						type="avatarStack"
					>
						TONN
					</Info>
				}
			/>
			<div className="grid grid-cols-4 gap-2.5">
				{buttons}
			</div>
			<Button> Bet </Button>
		</div>
		</Section>
	)
}

const VoteBlock: FC<DisputeData> = (props) => {
	const outcomes = props.outcomes

	const outcomeList = Array.from(outcomes).map(([key, value]) => (
		<Cell Component="label" before={<Selectable name="group" value="1"/>}
					description={`Voted: ${value.voted.toString()}, total: ${fromNano(value.amount)}`} multiline>
			{value.name.toString()}
		</Cell>
	));

	if (outcomes) {
		return (
			<Section>
				<div className="flex flex-col gap-2.5 p-4">
					{outcomeList}
				</div>
			</Section>
		)
	}
	return (<div></div>)
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

const DisputeFragment = () => {
	const model = prepareDisputeData()
	if (model) {
		const outcomes = model.outcomes
		return (
			<>
				<Skeleton>
				<BetInfo {...model}/>
				</Skeleton>

				<VoteBlock {...model}/>
				<BetBlock/>

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