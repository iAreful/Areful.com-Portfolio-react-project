import { FaCopyright} from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { GrGraphQl } from "react-icons/gr";
import DevSection from "./DevSection";
import ContactUs from "./ContactUs/ContactUs";

function Footer() {
    return (
			<div className='bg-violet-400 dark:bg-[#5643BF] rounded-xl pt-8 mb-96'>
				<div className=''>
					<div className='flex flex-row flex-wrap justify-start items-start'>
						<div className='mb-6 w-48 sm:w-80 mx-auto'>
							<h2 className='uppercase font-bold mb-2.5 text-gray-800 dark:text-[#AFE2FE]'>
								Links
							</h2>

							<ul className='list-none mb-0'>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 1
									</a>
								</li>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 2
									</a>
								</li>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 3
									</a>
								</li>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 4
									</a>
								</li>
							</ul>
						</div>

						<div className='mb-6 w-48 sm:w-80 mx-auto'>
							<h2 className='uppercase font-bold mb-2.5 text-gray-800 dark:text-[#AFE2FE]'>
								Links
							</h2>

							<ul className='list-none mb-0'>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 1
									</a>
								</li>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 2
									</a>
								</li>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 3
									</a>
								</li>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 4
									</a>
								</li>
							</ul>
						</div>

						<div className='mb-6 w-48 sm:w-80 mx-auto'>
							<h2 className='uppercase font-bold mb-2.5 text-gray-800 dark:text-[#AFE2FE]'>
								Links
							</h2>

							<ul className='list-none mb-0'>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 1
									</a>
								</li>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 2
									</a>
								</li>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 3
									</a>
								</li>
								<li>
									<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
										Link 4
									</a>
								</li>
							</ul>
						</div>
						<div className='mb-6 w-48 sm:w-80 mx-auto'>
												<h2 className='uppercase font-bold mb-2.5 text-gray-800 dark:text-[#AFE2FE]'>
													Links
												</h2>

												<ul className='list-none mb-0'>
													<li>
														<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
															Link 1
														</a>
													</li>
													<li>
														<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
															Link 2
														</a>
													</li>
													<li>
														<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
															Link 3
														</a>
													</li>
													<li>
														<a href='#!' className='text-gray-800 dark:text-[#AFE2FE]'>
															Link 4
														</a>
													</li>
												</ul>
						</div>

				
					</div>
				</div>
				<ContactUs/>
				<DevSection/>
				<div
					className='border-t-2 text-gray-900 text-center py-4 text-md font-semibold bg-blue-400 rounded-br-xl rounded-bl-xl mb-8'>
				<div className=" flex flex-row justify-center items-center">
					<span>{new Date().getFullYear()}</span> <FaCopyright className="mx-1 text-lg"/> All rights reserved by
					<a
						className='bg-yellow-100 hover:bg-yellow-200 px-2 rounded-xl mx-1'
						href='Areful.com'>
						Areful
					</a>
				</div>
				<div className=" flex flex-col sm:flex-row justify-between px-8 pt-4">
					<p className="text-sm text-blue-800 font-normal">Rev # A-22s3</p>
					<p className="text-sm text-blue-800 flex flex-row justify-center items-center gap-2 font-normal">Upcoming <GrGatsbyjs className="text-violet-800"/> <GrGraphQl className="text-[#e535ab]"/>version coming soon</p>
				</div>
				</div>
				
			</div>
		);
}

export default Footer;