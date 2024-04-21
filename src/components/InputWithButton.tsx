import React from 'react';

const InputWithButton = () => {
	// Define a function to handle the paste action
	const handlePaste = () => {
		// Implement paste functionality here
		navigator.clipboard.readText().then((clipText) => {
		});
	};

	return (
		<div className="flex items-stretch bg-telegram-light-gray rounded-lg shadow-md">
			<input
				id="tonAddressInput"
				type="text"
				placeholder="Disput address or domain"
				className="
				bg-telegram-light-gray
				flex-1 p-4 rounded-l-lg text-sm
				 focus:outline-none focus:ring focus:ring-opacity-50
				 focus:text-telegram-dark-gray-300"
			/>
			<button
				onClick={handlePaste}
				className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-r-lg transition-colors duration-200 ease-in-out"
			>
				Paste
			</button>
		</div>
	);
};

export default InputWithButton;