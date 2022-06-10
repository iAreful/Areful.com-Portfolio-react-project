/** @format */
import React from "react";

const Filter = () => {
	return (
		<div id='filter'>
			<div className='container mx-auto'>
				<div className='container mx-auto flex flex-row w-11/12 space-x-8 mt-20'>
					<ul className='simplefilter space-x-8 flex flex-row mb-10'>
						<li
							className='fltr-controls  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full active'
							data-filter='all'>
							All
						</li>
						<li
							className='fltr-controls bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
							data-filter='1'>
							A1
						</li>
						<li
							className='fltr-controls bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
							data-filter='2'>
							B1
						</li>
						<li
							className='fltr-controls bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
							data-filter='3'>
							C1
						</li>
						<li
							className='fltr-controls bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
							data-filter='4'>
							D1
						</li>
					</ul>
				</div>

				<div className='filtr-container container flex flex-row w-11/12 space-x-8'>
					<div className='filtr-item' data-category='1, 4'>
						<img src='./img/img1.jpg' alt='1' width='100%' height='100%'/>
					</div>

					<div className='filtr-item' data-category='2'>
						<img src='./img/img2.jpg' alt='2'  width='100%' height='100%'/>
					</div>

					<div className='filtr-item' data-category='4, 3'>
						<img src='./img/img3.jpg' alt='4'  width='100%' height='100%'/>
					</div>

					<div className='filtr-item' data-category='3, 1'>
						<img src='./img/img4.jpg' alt='3'  width='100%' height='100%'/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
