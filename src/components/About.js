/** @format */

import React from "react";
// import { GiSpeaker } from "react-icons/gi";
import { FcSpeaker } from "react-icons/fc";
import { ImFilePdf } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import useSound from "use-sound";
import fullname from "./pics/fullName.mp3";
import Pronoune from "./pics/pronouce.mp3";
import Typewriter from "typewriter-effect";
import { withNamespaces } from 'react-i18next';
function About({ t }) {

	

	// const [playfullname, stopfullname] = useSound(fullname);
	const [playAudio1, { stop: stopAudio1 }] = useSound(fullname, {
		volume: 0.5,
	});
	const [playAudio2, { stop: stopAudio2 }] = useSound(Pronoune, {
		volume: 0.5,
	});

	const resumeurl = "drive.google.com/";
	const githuburl = "https://github.com/iAreful";
	const twitterurl = "https://twitter.com/ArefulCode";
	const linkedinurl = "https://www.linkedin.com/in/areful/";
	const PictureURL = 'https://avatars.githubusercontent.com/u/15269933?v=4';
	return (
		<div
			id='about'
			className=' dark:bg-slate-900 bg-sky-100 rounded-xl'>
			<div className='flex flex-col sm:flex-row justify-center items-center sm:items-center'>
				<div className='w-11/12 sm:w-9/12 '>
					<h2 className=' text-3xl sm:text-5xl font-black  pt-10 sm:pt-0'>
						<strong className="text-[#1d4289] dark:text-white">{t('Md. Areful Islam')}</strong>{" "}
						<FcSpeaker
							onMouseEnter={() => playAudio1(fullname)}
							onMouseLeave={() => stopAudio1(fullname)}
							className='inline text-3xl cursor-pointer'
						/>
					</h2>
					<p className='text-xl mt-4 text-center text-blue-900 dark:text-white '>
						he / his / him
					</p>
					{/* <strong>example</strong> */}

					<p className='text-lg font-black text-blue-900 dark:text-slate-100 pt-4 tracking-widest'>
						/aA.Ree.Full/{" "}
						<FcSpeaker
							onMouseEnter={() => playAudio2(Pronoune)}
							onMouseLeave={() => stopAudio2(Pronoune)}
							className='inline text-3xl cursor-pointer'
						/>
					</p>
					<div className='text-2xl font-medium dark:text-slate-100 text-blue-900'>
						<Typewriter
							options={{
								strings: [
									"Coder",
									"Former EEE Engineer",
									"Technical Enthusiast",
								],
								autoStart: true,
								loop: true,
								pauseFor: 100,
							}}
						/>
					</div>
					<div className='flex flex-row justify-center mt-6 '>
						<div className="h-[.1rem] w-16 bg-white mt-3 "></div>
						<a
							href={resumeurl}
							aria-label='pdffilelink'
							className='mx-2'
							target='_blank'
							rel='noreferrer noopener'>
							{" "}
							<ImFilePdf className='text-[#EA0C0C] dark:text-white  hover:text-[#e73f3f]  dark:hover:text-[#ffffff] inline text-2xl cursor-pointer transition-all hover:scale-110  transition-all' />
						</a>
						<a
							href={githuburl}
							aria-label='githublink'
							className='mx-2'
							target='_blank'
							rel='noreferrer noopener'>
							<FaGithubAlt className='text-[#171515] dark:text-white hover:text-[#171515] dark:hover:text-[#ffffff] inline text-2xl cursor-pointer transition-all hover:scale-110 transition-all' />
						</a>
						<a
							href={twitterurl}
							aria-label='twitterlink'
							className='mx-2'
							target='_blank'
							rel='noreferrer noopener'>
							<BsTwitter className='text-[#00acee] hover:text-[#00acee] dark:hover:text-[#ffffff] inline text-2xl cursor-pointer transition-all hover:scale-110  transition-all' />
						</a>
						<a
							href={linkedinurl}
							aria-label='linkedinkink'
							className='mx-2'
							target='_blank'
							rel='noreferrer noopener'>
							<FaLinkedin className='text-[#0e76a8] dark:text-[#6dc8f1] hover:text-[#0e76a8]  dark:hover:text-[#ffffff] inline text-2xl  cursor-pointer transition-all hover:scale-110  transition-all' />
						</a>
						<div className="h-[.1rem] w-16 bg-white mt-3"></div>
					</div>

				</div>
				<div className='inline-flex w-11/12 sm:w-3/12 justify-center items-center p-6'>
					<img
						className='transition-all hover:scale-105 h-72 sm:h-80 rounded-xl  shadow-slate-400 dark:shadow-indigo-500/50 shadow-xl'
						src={PictureURL}
						alt='Md. Areful Islam'
						width='100%'
						height='100%'
					/>
				</div>
			</div>

			<h2 className=' z-10 relative pt-6 px-10 text-xl custom-css pb-6 sm:pb-16 '>
			<FaQuoteLeft className="dark:text-white text-black -z-10 absolute top-0 sm:-top-16 left-4 sm:left-4 text-5xl sm:text-9xl opacity-10"/> 
			<span className="underlined underlined--thick dark:text-white">{t('about-details')}</span>
			<FaQuoteRight className="dark:text-white text-black -z-10 absolute bottom-2 sm:bottom-4 right-6 sm:right-4 text-5xl sm:text-9xl opacity-10"/>
			</h2>
		</div>
	);
}
export default withNamespaces()(About);