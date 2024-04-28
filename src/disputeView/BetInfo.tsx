import {FC} from "react";
import {Cell, Section} from "@xelene/tgui";
import {Label} from "../components/Label";
import {TextBlock} from "../components/TextBlock";
import {DisputeData} from "./DisputeFragment";


export const BetInfo: FC<DisputeData> = (props) => {
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

				{/*<Label text="Duration">*/}
				{/*	<TextBlock>*/}
				{/*		{ props.duration }*/}
				{/*	</TextBlock>*/}
				{/*</Label>*/}

				<Label text="Referees">
					{ referees }
				</Label>
			</div>
		</Section>
	)
}