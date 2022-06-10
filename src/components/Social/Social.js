/** @format */

import React from "react";
import Linkedin from "./Linkedin";
import Twitter from "./Twitter";
import NewsLetter from "./NewsLetter";
function Social() {
	return (
		<div
			id='sociallink'
			className='dark:bg-slate-600 bg-indigo-400 rounded-xl my-4 pb-4 px-4'>
			<h2 className='py-4 text-2xl font-bold dark:text-white'>Social Links</h2>
			<div className='flex flex-col sm:flex-row rounded-xl justify-between items-center  space-x-0 sm:space-x-0'>
				<Linkedin />
				<Twitter />
				<NewsLetter />
			</div>
		</div>
	);
}

export default Social;
