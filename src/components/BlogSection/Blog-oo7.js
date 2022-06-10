/** @format */

import React from "react";

export default function Blog() {
	return (
		<div
			id='blog'
			className='w-11/12 mx-auto dark:bg-[#052D3F] bg-[#FEF8B2] p-4 rounded-xl mt-6'>
			<h1 className='text-6xl dark:text-white'>Blog</h1>
			<div className='blog px-8 my-4'>
				<h2 className='text-3xl text-left font-semibold dark:text-white text-blue-600'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
					commodi.
				</h2>
				<div className='flex flex-row gap-4 italic pt-2 px-0'>
					<p className='text-lx dark:text-white text-black'>
						by{" "}
						<span className='text-sm font-bold dark:text-white  text-black'>
							Author
						</span>
					</p>{" "}
					<code className='text-md dark:text-white text-black'>01/01/2099</code>
				</div>
			</div>
		</div>
	);
}
