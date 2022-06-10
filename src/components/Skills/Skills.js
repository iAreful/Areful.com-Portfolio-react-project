/** @format */

import React from "react";
import PeopleSkill from "./PeopleSkill";
import { withNamespaces } from 'react-i18next';
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
} from "recharts";

const data = [
	{
		language: "HTML",
		points: 90,
	},
	{
		language: "CSS",
		points: 80,
	},
	{
		language: "Tailwind CSS",
		points: 75,
	},
	{
		language: "Git and Github",
		points: 75,
	},
	{
		language: "JavaScript",
		points: 75,
	},
	{
		language: "React.JS",
		points: 60,
	},
	{
		language: "Next.JS",
		points: 40,
	},
	{
		language: "Node.JS",
		points: 45,
	},
	{
		language: "MongoDB",
		points: 40,
	},
	{
		language: "Express.JS",
		points: 45,
	},
	{
		language: "Figma",
		points: 70,
	},
	{
		language: "TypeScript",
		points: 40,
	},	
	{
		language: "Gastby.JS",
		points: 50,
	},	
	{
		language: "GraphQL",
		points: 50,
	},

];

 function Skill({ t }) {
	
	return (
		<div
			id='skill'
			className='overflow-hidden overflow-x-hidden rounded-xl dark:bg-[#4B5769] bg-[#4B5769]'>
				<h2 className="text-3xl my-4 font-bold pt-8 dark:text-slate-200 text-slate-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, nesciunt.</h2>
				<p className="text-xl px-4 dark:text-slate-200 text-slate-200">Through my studies, I've gained a solid understanding of computer science and web development concepts, and have dedicated a lot of my free time to apply these concepts to real-world scenarios and applications. I have two years work experience as IT-assitance and service engineer an inventory firm. </p>
			{/* <h2 className='text-4xl'>Skill Talk</h2> */}
			<div className=' flex flex-col sm:flex-row sm:justify-center items-center'>
				<div className='' id=''>
					<h2 className='mt-4 -mb-28 sm:-mb-0 text-2xl font-bold dark:text-slate-200 text-slate-200 '>
					{t('Dev-Skill')}
					</h2>
					<RadarChart
						stroke='green'
						className='text-white -mb-32 sm:-mb-0'
						cx={300}
						cy={250}
						outerRadius={150}
						width={600}
						height={600}
						data={data}>
						<PolarGrid stroke='#FEFECE' />
						<PolarAngleAxis
							dataKey='language'
							axisLine={{ stroke: "#FEFECE" }}
							stroke='#00FFBE'
						/>
						<PolarRadiusAxis stroke='#C5CAD1' />
						<Radar
							className='text-white'
							name='Areful'
							dataKey='points'
							stroke='#055e42'
							fill='#057A55'
							fillOpacity={0.7}
						/>
					</RadarChart>
				</div>
				<div className='' id=''>
					<h2 className='mt-4 -mb-24sm:-mb-0 p-0 text-2xl font-bold dark:text-slate-200  text-slate-200 '>
					{t('People Skill')}
					</h2>

					<PeopleSkill className='-mb-4 mr-0' />
				</div>
			</div>
		</div>
	);
}
export default withNamespaces()(Skill);