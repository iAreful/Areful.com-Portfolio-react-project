/** @format */

import React from "react";

import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
} from "recharts";

const PeopleSkills = [
	{
		skill: "Adaptability",
		point: 85,
	},
	{
		skill: "Communication Skill",
		point: 80,
	},
	{
		skill: "Self-Motivation",
		point: 99,
	},
	{
		skill: "Emotional intelligence",
		point: 90,
	},
	{
		skill: "Empathy",
		point: 85,
	},
	{
		skill: "Problem-solving skills",
		point: 85,
	},
	{
		skill: "critical thinking",
		point: 85,
	},
	{
		skill: "Self-awareness",
		point: 89,
	},

	{
		skill: "Perseverance",
		point: 90,
	},

	{
		skill: "Accountability",
		point: 70,
	},
	{
		skill: "Time management",
		point: 70,
	},
	{
		skill: "Leadership",
		point: 75,
	},
	{
		skill: "Creativity",
		point: 80,
	},
];

export default function PeopleSkill() {
	return (
		<RadarChart
			className=''
			cx={300}
			cy={250}
			outerRadius={150}
			width={600}
			height={600}
			data={PeopleSkills}>
			<PolarGrid stroke='#00FFBE' />
			<PolarAngleAxis
				dataKey='skill'
				axisLine={{ stroke: "#00FFBE" }}
				stroke='#FEFECE'
			/>
			<PolarRadiusAxis />
			<Radar
				name='Areful'
				dataKey='point'
				stroke='#912ca8'
				fill='#ac34c7'
				fillOpacity={0.4}
			/>
		</RadarChart>
	);
}
