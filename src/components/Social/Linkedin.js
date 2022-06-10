/** @format */

import React from "react";

export default function Linkedin() {
	return (
		<div className='dark:bg-slate-700 bg-red-200 text-center sm:w-1/4 w-11/12  rounded-xl my-6  h-60 inline-flex flex-col items-center justify-center'>
			<p className='text-blue-800 text-2xl dark:text-slate-200 '>Linkedin</p>
			<p className='text-blue-800 text-2xl dark:text-slate-200 '>Linkedin</p>
			<p className='text-blue-800 text-2xl dark:text-slate-200 '>Linkedin</p>
		</div>
	);
}

// import React, { useEffect } from "react";

// export default function Linkedin() {
// 	useEffect(() => {
// 		const script = document.createElement("script");
// 		script.src = "https://platform.linkedin.com/badges/js/profile.js";
// 		script.async = true;
// 		script.defer = true;

// 		document.body.appendChild(script);

// 		return () => {
// 			// document.body.removeChild(script);
// 		};
// 	}, []);

// 	return (
// 		<div className='bg-red-400 text-center w-1/4 rounded-xl'>
// 			<div
// 				className='badge-base LI-profile-badge'
// 				data-locale='en_US'
// 				data-size='medium'
// 				data-theme='light'
// 				data-type='VERTICAL'
// 				data-vanity='areful'
// 				data-version='v1'></div>
// 		</div>
// 	);
// }
