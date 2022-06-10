/** @format */

import React from "react";
import i18n from '../i18n/config';
import "flowbite";
import DarkModeToggle from "./Funyionality/DarkMode";
import { Link } from "react-scroll";
import { withNamespaces } from 'react-i18next';
// import ReactCountryFlag from "react-country-flag"

//flags

import USFlag from './pics/us.svg';
import BDFlag from './pics/bd.svg';
import DEFlag from './pics/de.svg';
import ESFlag from './pics/es.svg';
import FRFlag from './pics/fr.svg';
import JPFlag from './pics/jp.svg';
import KRFlag from './pics/kr.svg';
import CNFlag from './pics/cn.svg';
import BRFlag from './pics/br.svg';
import NLFlag from './pics/nl.svg';
// import ARFLOGO from './pics/ARF-logo_.png';
// import ARFLOGOw from './pics/ARF-logo.png';
function Menu({ t }) {
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	  }

	  console.log(`%c


	   ###    ########  ######## ######## ##     ## ##       || =>  A React Developer 
	  ## ##   ##     ## ##       ##       ##     ## ##       || =>  Looking For a competitive Job
	 ##   ##  ##     ## ##       ##       ##     ## ##       || =>  => Arf@Areful.com
	##     ## ########  ######   ######   ##     ## ##       || =>  => github.com/iAreful
	######### ##   ##   ##       ##       ##     ## ##       || =>  => linkedin.com/in/areful
	##     ## ##    ##  ##       ##       ##     ## ##       || =>  I Love code and you never regreade
	##     ## ##     ## ######## ##        #######  ######## || =>  Have a Good Day @Areful 
	
	 _______________________________________________________
	|                                                       |
	|  This website was designed and built by Areful Islam  |
	|_______________________________________________________|							 
 `, "font-family:monospace")
	return (
		<div className='sticky top-0 z-30 shadow-xl mb-8 py-3 rounded-bl-lg rounded-br-lg bg-white dark:bg-gray-800 '>
			<div className='container mx-auto w-11/12 '>
				<nav className='px-2 border-gray-200 dark:border-gray-700'>
					<div className='nav-up flex flex-wrap  justify-between items-center mx-auto pb-4 border-b dark:border-b-gray-600 border-b-salte-600'>
						<a href='/' className='flex items-center'>
							<span className='w-4 self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
							{t('Areful')}
							{/* <img className="w-12 sm:w-16 " src={ARFLOGOw} alt="" /> */}
							{/* <img className="w-12 sm:w-16 " src={ARFLOGOw} alt="" /> */}
							
							</span>
						</a>

						<div className='w-28'>
							<DarkModeToggle />
						</div>
						<button
							data-collapse-toggle='mobile-menu'
							type='button'
							className='inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500'
							aria-controls='mobile-menu-2'
							aria-label='Mobile menu'
							aria-expanded='false'>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='w-6 h-6'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'></path>
							</svg>
							<svg
								className='hidden w-6 h-6'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'></path>
							</svg>
						</button>
						<div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
							<ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-4xl'>
								<li className='cursor-pointer sm:border-0 pb-1 border-b pt-1 text-base text-blue-600 dark:text-slate-400'>
									<Link
										to='https://www.areful.com'
										activeclass='active'
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
										id=''
										className=''>
										{t('home')}
									</Link>
								</li>
								<li className='cursor-pointer sm:border-0 pb-1 border-b pt-1 text-base text-blue-600 dark:text-slate-400'>
									<Link
										to='about'
										activeclass='active cursor-pointer'
										spy={true}
										smooth={true}
										offset={-80}
										duration={500}
										id=''
										className=''>
										{t('About')}
									</Link>
								</li>

								<li className='pb-1 border-b sm:border-0 pt-1 cursor-pointer text-base text-blue-600 dark:text-slate-400'>
									<Link
										to='project'
										activeclass='active'
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										id='block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
										className='cursor-pointer'>
										{t('Project')}
									</Link>
								</li>
								<li className='pb-1 border-b sm:border-0 pt-1 cursor-pointer text-base  text-blue-600 dark:text-slate-400'>
									<Link
										to='blog'
										activeclass='active'
										spy={true}
										smooth={true}
										offset={-60}
										duration={500}
										id='block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
										className=''>
										{t('Blog')}
									</Link>
								</li>
								<li className='pb-1 border-b sm:border-0 pt-1 cursor-pointer text-base text-blue-600 dark:text-slate-400'>
									<Link
										to='git'
										activeclass='active'
										spy={true}
										smooth={true}
										offset={-80}
										duration={500}
										id='block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
										className='cursor-pointer'>
										{t('Github')}
									</Link>
								</li>
								<li className='pb-1 border-b sm:border-0 pt-1 cursor-pointer text-base text-blue-600 dark:text-slate-400'>
									<Link
										to='skill'
										activeclass='active'
										spy={true}
										smooth={true}
										offset={-80}
										duration={500}
										id='block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
										className='cursor-pointer'>
										{t('Skill')}
									</Link>
								</li>
								<li className='pb-1 border-b sm:border-0 pt-1 cursor-pointer text-base text-blue-600 dark:text-slate-400'>
									<Link
										to='sociallink'
										activeclass='active'
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										id='block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
										className='cursor-pointer'>
										{t('Socials')}
									</Link>
								</li>
								<li className='pb-1 border-b-0 pt-1 cursor-pointer text-base text-blue-600 dark:text-slate-400'>
									<Link
										to='store'
										activeclass='active'
										spy={true}
										smooth={true}
										offset={-65}
										duration={500}
										id='block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
										className='cursor-pointer'>
										{t('Store')}
									</Link>
								</li>								
								<li className='pb-1 border-b-0 pt-1 cursor-pointer text-base text-blue-600 dark:text-slate-400'>
									<Link
										to='store'
										activeclass='active'
										spy={true}
										smooth={true}
										offset={-65}
										duration={500}
										id='block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
										className='cursor-pointer'>
										{t('Contact')}
									</Link>
								</li>
							</ul>
						</div>
						
	
					</div>
											
					<div className=" pb-2 flex flex-row justify-center items-center mx-auto ">
						{/* <ReactCountryFlag countryCode="NL" svg />  */}
						<div className="flex flex-row pt-2">
							<button className="text-blue-400 dark:text-slate-400 flex flex-row justify-center items-center mx-1 sm:mx-3 w-6 sm:w-24 text-sm sm:text-base " onClick={() => changeLanguage('en')}> <img className="w-4 m-1" src={USFlag}  alt=""/> <span className="hidden sm:block">EN</span></button>

							<button className="text-blue-400 dark:text-slate-400 flex flex-row justify-center items-center mx-1 sm:mx-3  w-6 sm:w-24 text-sm sm:text-base " onClick={() => changeLanguage('bn')}> <img className="w-4 m-1" src={BDFlag}  alt=""/> <span className="hidden sm:block">BN</span></button>


							<button className="text-blue-400 dark:text-slate-400 flex flex-row justify-center items-center  mx-1 sm:mx-3  w-6 sm:w-24 text-sm sm:text-base " onClick={() => changeLanguage('jp')}> <img className="w-4 m-1 border" src={JPFlag}  alt=""/>  <span className="hidden sm:block">JP</span></button>


							<button className="text-blue-400 dark:text-slate-400 flex flex-row justify-center items-center  mx-1 sm:mx-3  w-6 sm:w-24 text-sm sm:text-base " onClick={() => changeLanguage('kr')}> <img className="w-4 m-1 border" src={KRFlag}  alt=""/>  <span className="hidden sm:block">KR</span></button>


							<button className="text-blue-400 dark:text-slate-400 flex flex-row justify-center items-center  mx-1 sm:mx-3  w-6 sm:w-24 text-sm sm:text-base " onClick={() => changeLanguage('cn')}> <img className="w-4 m-1" src={CNFlag}  alt=""/>  <span className="hidden sm:block">CN</span></button>


							<button className="text-blue-400 dark:text-slate-400 flex flex-row justify-center items-center  mx-1 sm:mx-3  w-6 sm:w-24 text-sm sm:text-base " onClick={() => changeLanguage('br')}> <img className="w-4 m-1" src={BRFlag}  alt=""/>  <span className="hidden sm:block">BR</span></button>


							<button className="text-blue-400 dark:text-slate-400 flex flex-row justify-center items-center  mx-1 sm:mx-3  w-6 sm:w-24 text-sm sm:text-base " onClick={() => changeLanguage('es')}> <img className="w-4 m-1" src={ESFlag}  alt=""/>  <span className="hidden sm:block">ES</span></button>

							<button className="text-blue-400 dark:text-slate-400 flex flex-row justify-center items-center  mx-1 sm:mx-3  w-6 sm:w-24 text-sm sm:text-base " onClick={() => changeLanguage('nl')}> <img className="w-4 m-1" src={NLFlag}  alt=""/>  <span className="hidden sm:block">NL</span></button>


							<button className="text-blue-400 dark:text-slate-400 flex flex-row justify-center items-center  mx-1 sm:mx-3  w-6 sm:w-24 text-sm sm:text-base " onClick={() => changeLanguage('de')}> <img className="w-4 m-1" src={DEFlag}  alt=""/>  <span className="hidden sm:block">DE</span></button>


							<button className="text-blue-400 dark:text-slate-400 flex flex-row justify-center items-center  mx-1 sm:mx-3  w-6 sm:w-24 text-sm sm:text-base " onClick={() => changeLanguage('fr')}> <img className="w-4 m-1" src={FRFlag}  alt=""/>  <span className="hidden sm:block">FR</span></button>


						</div>
					</div>

				</nav>
			</div>
		</div>
		
	);
}
export default withNamespaces()(Menu);