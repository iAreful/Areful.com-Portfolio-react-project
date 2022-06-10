/** @format */

import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
	return (
		<>
			<div className='w-[90vw] sm:w-100vw flex flex-row sm:flex-row  flex-wrap  sm:flex-nowrap justify-center items-center sm:mx-1 -mx-1'>
				{menuItems.map((Val, id) => {
					return (
						<button
							aria-label='filter buttons'
							className='mx-2 my-2 sm:my-0 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2'
							onClick={() => filterItem(Val)}
							key={id}>
							{Val}
						</button>
					);
				})}
				<button
					aria-label='all filter button'
					className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded-full'
					onClick={() => setItem(Data)}>
					All
				</button>
			</div>
		</>
	);
};

export default Buttons;
