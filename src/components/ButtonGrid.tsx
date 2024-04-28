import React from 'react';

type Props = {
	count: number;
	children: React.ReactNode;
};

export const ButtonGrid = (props: Props) => {
	const { count, children } = props;
	const grid_size = `grid-cols-${count}`
	return (
		<div className={`grid grid-cols-4 gap-2.5`}>
			{children}
		</div>
	);
};