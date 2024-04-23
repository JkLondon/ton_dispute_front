import React from "react";

type Props = {
	mainColor?: string;
	outline?: boolean;
	icon?: string;
	column?: boolean;
	inversed?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const TGButton = (props: Props) => {
	const {
		className,
		outline,
		children,
		icon,
		column,
		inversed,
		...restProps
	} = props;

	return (
		<button
			{...restProps}
			className={`${className} ${inversed ? 'text-telegram-white bg-telegram-bt-blue' : 'text-telegram-bt-blue bg-telegram-white'}
        flex ${column ? "flex-col" : "flex-row"}
         w-full justify-center items-center cursor-pointer
        font-semibold text-sm leading-6 py-3 px-3
        select-none transition duration-200 ease-in-out rounded-md
        focus:outline-none focus:ring-2 focus:ring-offset-2`}
		>
			{icon && (
				<i className={`mdi ${icon} inherit-color relative top-1`} />
			)}
			{children}
		</button>
	);
};