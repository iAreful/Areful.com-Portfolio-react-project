/** @format */

import React from "react";
	

import { withNamespaces } from 'react-i18next';
function GitContribute({ t }) {
	
	const url = "https://github.com/iAreful";


	const url3d = "https://skyline.github.com/iareful/2022";

	return (
		<div
			id='git'
			className='h-48 sm:h-[22rem] dark:bg-slate-800 bg-slate-900 rounded-xl my-6'>
			<h2 className='text-3xl font-bold py-4 dark:text-slate-400 text-white'>
				{t("Git-Title")}
			</h2>
			<a href={url} target='_blank' rel='noreferrer noopener'>
				<img
					className='w-screen px-4'
					src='https://ghchart.rshah.org/iAreful'
					alt="Areful's Github Chart"
					width='100%'
					height='100%'
				/>
			</a>

			<h2 className='text-yellow-400 dark:text-white text-2xl py-4 font-bold'>
				View in{" "}
				<a
					href={url3d}
					className='animate-pulse border-b-2 hover:border-b-green-400 transition-all'
					target='_blank'
					rel='noreferrer noopener'>
					3D, VR and IRL!
				</a>
			</h2>
		</div>
	);
}

export default withNamespaces()(GitContribute);
