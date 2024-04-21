import React from 'react';

type Props = {
	children: React.ReactNode;
};

export const ButtonGrid = (props: Props) => {
	const { children } = props;
	return (
		<div className="grid grid-cols-2 gap-2.5">
			{children}
		</div>
	);
};