import {Button, List, Section} from "@xelene/tgui";
import {TextBlock} from "./components/TextBlock";
import {Label} from "./components/Label";
import {useTonConnect} from "./hooks/useTonConnect";
import {useJettonContract} from "./hooks/useJettonContract";
import {useState} from "react";
import InputWithButton from "./components/InputWithButton";
import {Chip, Cell, Selectable, Radio} from "@xelene/tgui";
import {ButtonGrid} from "./components/ButtonGrid";
import Input from "./components/Input";

type DisputeData = {
	wallet: string;
	name: string;
	// description: string;
	// voted: string;
	// feed: string;
	// outcomes: string;
	// referees: string;
	// balance: string
}

function prepareDisputeData(): DisputeData {
	const {connected, wallet} = useTonConnect()
	const {referees, bank, name, description, bet, vote, claim, contractAddress, fees, isVoted, outcomes} = useJettonContract()
	const [betOutcomeID, setBetOutcomeID] = useState(0);
	const [voteOutcomeID, setVoteOutcomeID] = useState(0);
	const [voteRefereeID, setVoteRefereeID] = useState(0);
	const [claimBetID, setClaimBetID] = useState(0);

	return {
		wallet: wallet ?? "",
		name: "some disputesome disputesome disputesome disputesome disputesome dispute"
	}
}

export function BetBlock() {
	return (
		<Section>
		<div className="flex flex-col gap-2.5 p-4">
			<Input/>
			<div className="grid grid-cols-4 gap-2.5">
				<Button mode="outline"> +1 </Button>
				<Button mode="outline"> +5 </Button>
				<Button mode="outline"> +10 </Button>
				<Button  mode="outline"> +20 </Button>
			</div>
			<Button> Bet </Button>
		</div>
		</Section>
	)
}

export function VoteBlock() {
	return (
		<Section>
				<Cell Component="label" before={<Selectable name="group" value="1"/>}
							description="Some options 2." multiline>
					First radio
				</Cell>
			<Cell Component="label" before={<Selectable name="group" value="2"/>}
						description="Some options 2." multiline>
				Second radio
			</Cell>

			{/*<h1> OR move to detail </h1>*/}

			{/*<Cell*/}
			{/*	Component="label"*/}
			{/*	before={<Radio name="radio" value="1"/>}*/}
			{/*	description="Option description."*/}
			{/*	multiline*/}
			{/*>*/}
			{/*	First radio*/}
			{/*</Cell>*/}
			{/*<Cell*/}
			{/*	Component="label"*/}
			{/*	before={<Radio name="radio" value="2"/>}*/}
			{/*	description="Option description."*/}
			{/*	multiline*/}
			{/*>*/}
			{/*	Second radio*/}
			{/*</Cell>*/}
		</Section>
	)
}

export function DisputeFragment() {
	const model = prepareDisputeData()

	return (
		<List
			className="p-10 w-300"
			style={{
				background: 'var(--tgui--secondary_bg_color)',
			}}
		>
			<Section header="Dispute information">
				<div className="p-4 flex flex-col gap-2.5">
					<Label text="Wallet">
						<TextBlock>
							{model.wallet ?? ""}
						</TextBlock>
					</Label>

					<TextBlock>
						{ model.name ?? "" }
					</TextBlock>

					<TextBlock>
						Some wallet long name
					</TextBlock>
				</div>
			</Section>

			<BetBlock/>

			<Section header="Claim">
				<div className="p-4 flex flex-row gap-2.5 items-center">
					<Input/>
					<Button size="s"> Claim </Button>
				</div>
			</Section>

			<VoteBlock/>
		</List>
)
}