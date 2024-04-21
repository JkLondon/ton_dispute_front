// TGButton.tsx
import React from 'react';

interface TGButtonProps {
	label: string;
	iconSvgPath: string; // SVG path for the icon
	iconViewBox: string; // viewBox attribute for the SVG element
	onClick: () => void;
	className?: string;
	iconClassName?: string; // Additional classes for the icon styling if needed
}

const TGButton = ({
										label,
										iconSvgPath,
										iconViewBox,
										onClick,
										className = '',
										iconClassName = '',
									}: TGButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold py-2 px-4 rounded-full shadow hover:shadow-md active:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300 ${className}`}
			style={{ borderWidth: 1, borderColor: '#d1d5db' }} // Use the exact color code for the border
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox={iconViewBox}
				className={`h-5 w-5 ${iconClassName}`} // Use the exact size for the icon
				fill="currentColor"
			>
				<path fillRule="evenodd" d={iconSvgPath} clipRule="evenodd" />
			</svg>
			{label}
		</button>
	);
};

export default TGButton;
