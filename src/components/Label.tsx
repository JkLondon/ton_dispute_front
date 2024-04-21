import React, { ReactNode } from "react";

type Props = {
	text: ReactNode;
	children: ReactNode;
	isRequired?: boolean;
	isPlain?: boolean; // Helps to avoid nested <label> tags
	slotRight?: ReactNode;
};

export const Label = (props: Props) => {
	const Tag = props.isPlain ? "span" : "label";
	const { slotRight, text, children, isRequired } = props;

	return (
		<Tag className="flex flex-col gap-0">
			<div className="flex items-center ml-1">
        <span className="text-telegram-dark-gray text-sm">
          {text}
        </span>
				{isRequired && (
					<span className="pl-1 text-telegram-red]">*</span>
				)}
				{slotRight && (
					<span className="ml-auto mr-1 text-sm">
            {slotRight}
          </span>
				)}
			</div>
			{children}
		</Tag>
	);
};