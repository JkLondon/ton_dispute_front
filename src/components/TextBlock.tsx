import React from 'react';

type Props = {
	children: React.ReactNode;
	onClick?: () => void;
};

export const TextBlock = (props: Props) => {
	return (
		<p
			onClick={props.onClick}
			className={`bg-telegram-light-gray rounded-md h-auto p-3 
                        box-border flex justify-between items-center cursor-pointer 
                        overflow-hidden break-words`}
		>
			{props.children}
		</p>
	);
}