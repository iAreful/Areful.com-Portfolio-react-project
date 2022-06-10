/** @format */

import React from "react";

const Card = ({ item }) => {
// const project1 = '#';
	return (
		<>
			<section className='text-center lg:text-left my-4'>
				<section className='container mx-auto p-6 w-11/12'>
					<div className='grid justify-self-center self-center gap-x-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 '>
						{item.map((Val) => {
							return (
								<div className='mb-6' key={Val.id}>
									<div className='max-w-sm dark:bg-[#5643BF] bg-[#1E429F] rounded-lg border-0 overflow-hidden'>
										<a href='1'>
											<img
												className='rounded-t-lg hover:scale-105 transition-all'
												src={Val.img}
												alt={Val.title}
												width='100%'
												height='100%'
											/>
										</a>
										<div className='p-5'>
											<a
												href='2'
												className='flex flex-row justify-between relative'>
												<h2 className='mb-2 text-left text-base sm:text-xl font-bold tracking-tight w-[10rem] dark:text-white text-white '>
													{Val.title}
												</h2>
												<div className=' p-2 '>
													<h2 className='text-center text-red-200 text-sm absolute top-1 w-16 -right-0 z-10'>
														{Val.status}
													</h2>
													<div className='border-0 tk-blob absolute -top-5 w-20 -right-4 -z-48'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 400 303'>
															<path d='M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z'></path>
														</svg>
													</div>
													{/* <svg className=" absolute -top-6 w-20 -right-2 -z-48" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
													<path fill="#8A3FFC" d="M41.3,-55.1C56.1,-46.1,72.4,-37.5,79.6,-23.9C86.7,-10.2,84.7,8.3,77,22.8C69.3,37.3,55.7,47.7,41.9,55C28.1,62.2,14.1,66.4,-2,69.1C-18.1,71.9,-36.1,73.2,-48.7,65.6C-61.3,57.9,-68.3,41.2,-71.6,24.8C-74.8,8.4,-74.1,-7.8,-69.9,-23.3C-65.6,-38.8,-57.7,-53.7,-45.5,-63.5C-33.2,-73.3,-16.6,-78,-1.7,-75.7C13.3,-73.4,26.5,-64.1,41.3,-55.1Z" transform="translate(100 100)" />
												  </svg> */}
												</div>
											</a>
											<p className='dark:text-white text-white custom-css mb-4'>
												{Val.desc}
											</p>
											<div className='flex flex-row flex-wrap justify-evenly gap-y-3 mt-4'>
												<div className='bg-gradient-to-tl from-purple-800 via-purple-400 to-purple-600 background-animate  rounded-full px-[.15rem] py-[.1rem]'>
													{" "}
													<a
														href={Val.detailsExplain}
														target='_target'
														rel='noreffer'
														className='text-xl px-2 py-0 hover:bg-blue-400 rounded-full border-0 bg-white bg-opacity-30'>
														Explanation
													</a>
												</div>

												<div className='bg-gradient-to-tl from-gray-800 via-gray-200 to-gray-600 background-animate  rounded-full px-[.15rem] py-[.1rem]'>
													{" "}
													<a
														href={Val.detailsExplain}
														target='_target'
														rel='noreffer'
														className='text-xl px-2 py-0 hover:bg-blue-400 rounded-full border-0 bg-white bg-opacity-30'>
														Github
													</a>
												</div>

												<div className='bg-gradient-to-tl from-yellow-500 via-yellow-100 to-yellow-400 background-animate  rounded-full px-[.15rem] py-[.1rem]'>
													{" "}
													<a
														href={Val.liveLink}
														target='_target'
														rel='noreffer'
														className='text-xl px-2 py-0 hover:bg-blue-400 rounded-full border-0 bg-white bg-opacity-30'>
														Live 1
													</a>
												</div>

												<div className='bg-gradient-to-tr from-indigo-600 via-indigo-200 to-indigo-600 background-animate  rounded-full px-[.15rem] py-[.1rem]'>
													{" "}
													<a
														href={Val.liveLink}
														target='_target'
														rel='noreffer'
														className='text-xl px-2 py-0 hover:bg-blue-400 rounded-full border-0 bg-white bg-opacity-30'>
														Live 2
													</a>
												</div>
											</div>

											{/* <a href='41'>{Val.tags},</a> */}
											{/* {Val.tags} */}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</section>
		</>
	);
};

export default Card;
