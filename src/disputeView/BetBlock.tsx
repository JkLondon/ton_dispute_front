import {FC, useState} from "react";
import {Button, Info, Input, Section} from "@xelene/tgui";
import {DisputeData} from "./DisputeFragment";

type props = {
	onBet: (amount: number) => void
	isButtonDisabled: boolean
	isFinished: boolean
}

export const BetBlock: FC<props> = (props) => {

	const buttonList = [1, 5, 10, 20]
	let [value, setValue] = useState("");

	const buttons = buttonList.map((curr) => (
		<Button mode="outline" onClick={() => {
			setValue((Number(value) + curr).toString())
		}}>
			{curr}
		</Button>
	))

	const claim = (
		<>
			<Input
				placeholder="Claim amount"
				className="flex-grow"
				after={
					<Button size="s">Claim</Button>
				}
			/>
		</>
	)

	const bet = (
		<>
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
			<Button
				disabled={ props.isButtonDisabled || value == '' }
				onClick={ () => props.onBet(Number(value)) }
			>
				Bet
			</Button>
		</>
	)

	return (
		<Section>
			<div className="flex flex-col gap-2.5 p-4">
				{ props.isFinished ? claim : bet }
			</div>
		</Section>
	)
}