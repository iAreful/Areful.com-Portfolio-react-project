/** @format */

import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";

function Twitter() {
	const url = "https://twitter.com/ArefulCode";

	return (
		<div className=' w-11/12 sm:w-1/4 rounded-xl rounded-xl p-6 h-60 my-6 bg-white dark:bg-[#171717]'>
			<a
				href={url}
				aria-label='Twitter'
				className='text-center flex flex-col sm:flex-col justify-center items-center '>
				<AiFillTwitterCircle className='text-5xl inline text-center text-blue-600 hover:text-blue-800' />

				{/* <h2 className='text-center text-2xl mt-4 mb-3 font-bold dark:text-slate-400 text-blue-700'>
					{" "}
					Md. Areful Islam
				</h2>
				
				<h2 className='dark:text-slate-400 text-blue-600 font-semibold tracking-wider text-xl'>
					Follow <br /> <span className='text-4xl'> @iAreful</span>
				</h2> */}
			</a>
		</div>
	);
}

export default Twitter;
