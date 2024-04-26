import {FC} from "react";
import {Cell, Section, Selectable} from "@xelene/tgui";
import {fromNano} from "@ton/core";
import {DisputeData} from "./DisputeFragment";
import {Outcome} from "../../build/Dispute/tact_Dispute";

type props = {
	data: DisputeData
	onSelect: (outcome: bigint) => void;
}

export const VoteBlock: FC<props> = (props) => {
	const outcomes = props.data.outcomes

	const outcomeList = Array.from(outcomes).map(([key, value]) => (
		<Cell Component="label"
					onClick={ () => props.onSelect(key )}
					before={
			<Selectable name="group" value="1"/>
		}
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
