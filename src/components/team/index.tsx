"use client";

import songImg from "./song.webp";
import atlasImg from "./atlas.webp";
import polebugImg from "./polebug.webp";
import kallyImg from "./kally.webp";
import Image from "next/image";
import { useState, useEffect } from "react";
import { m } from "framer-motion";

const team = [
	{
		name: "Song",
		image: songImg,
		role: "Co-Founder",
		socialMedia: "https://twitter.com/songkeys",
	},
	{
		name: "Atlas",
		image: atlasImg,
		role: "Co-Founder",
		socialMedia: "https://twitter.com/atlasoin_",
	},
	{
		name: "Polebug",
		image: polebugImg,
		role: "Co-Founder",
		socialMedia: "https://twitter.com/polebug_",
	},
	{
		name: "Kally",
		image: kallyImg,
		role: "Co-Founder",
		socialMedia: "https://twitter.com/kallydev",
	},
];

export function Team() {
	const [randomizedTeam, setRandomizedTeam] = useState(team);

	useEffect(() => {
		setRandomizedTeam([...team].sort(() => 0.5 - Math.random()));
	}, []);

	return (
		<div className="bg-violet-950 min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
					Meet Our Team
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{randomizedTeam.map((member, index) => (
						<m.div
							key={member.name}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-violet-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
						>
							<div className="relative h-64 w-full">
								<Image
									src={member.image}
									alt={member.name}
									layout="fill"
									objectFit="cover"
									className="transition-transform duration-300 hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-violet-900 to-transparent opacity-70"></div>
							</div>
							<div className="p-6">
								<h2 className="text-2xl font-bold mb-2">{member.name}</h2>
								<p className="text-violet-300 mb-4">{member.role}</p>
								<a
									href={member.socialMedia}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
								>
									Connect
								</a>
							</div>
						</m.div>
					))}
				</div>
			</div>
		</div>
	);
}
