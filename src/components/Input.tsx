import React from "react";

const Input = () => {
	return (
		// <div className="flex items-stretch bg-telegram-light-gray rounded-lg">
			<input
				id="tonAddressInput"
				type="text"
				placeholder="Disput address or domain"
				className="
				bg-telegram-light-gray
				flex-1 p-4 rounded-lg text-sm
				 focus:outline-none focus:ring focus:ring-opacity-50
				 focus:text-telegram-dark-gray-300
				 h-48px
				 "
			/>
		// {/*</div>*/}
	)
}

export default Input;