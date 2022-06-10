/** @format */

import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";

const Filter = () => {
	const [item, setItem] = useState(Data);

	const menuItems = [...new Set(Data.map((Val) => Val.category))];

	const filterItem = (curcat) => {
		const newItem = Data.filter((newVal) => {
			return newVal.category === curcat;
		});
		setItem(newItem);
	};
	return (
		<>
			<div
				id='project'
				className='dark:bg-slate-600 bg-[#FEFECE] rounded-xl'>
				<div className='row'>
					<h2 className='text-3xl font-bold py-4 dark:text-white text-blue-600'>Projects, What I've been working on </h2>
					<h2 className='text-xl font-bold py-4 dark:text-white text-blue-800'>I like to stay busy and always have a project in the works. Take a look at some of the applications, articles, and companies I've dedicated my time to. </h2>
					<Buttons
						filterItem={filterItem}
						setItem={setItem}
						menuItems={menuItems}
					/>
					<Card item={item} />
				</div>
			</div>
		</>
	);
};

export default Filter;
