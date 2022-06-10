/** @format */

import React from "react";
import { SiMinutemailer } from "react-icons/si";
export default function NewsLetter() {
	return (
		<div className='dark:bg-green-600 bg-green-500 hover:bg-green-600 hover:dark:bg-green-800 sm:w-2/5 w-11/12 rounded-xl h-60 inline-flex flex-col items-center justify-center'>
			<h3 className='text-4xl text-white  pb-6 font-bold tracking-wider'>
				NewsLetter
			</h3>
			<form action='/' className='relative'>
				<label
					htmlFor='News Letter'
					className='text-2xl text-white px-2 block flex flex-row'>
					<SiMinutemailer className='animate-bounce mt-1 mb-2  mx-2 text-yellow-200 text-3xl' />{" "}
					Get Email Updates:
				</label>
				<input
					type='email'
					name='News Letter'
					placeholder='Type your email'
					className='rounded-xl border-0 w-64 sm:w-72 p-3 pl-4 pr-24 transition-all focus:outline-none focus:bg-yellow-100 '
				/>
				<button
					aria-label='news letter button'
					type='submit'
					className='bg-blue-600 p-3 rounded-xl text-white absolute right-0 '>
					Submit
				</button>
			</form>
		</div>
	);
}
