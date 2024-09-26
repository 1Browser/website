"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
// @ts-expect-error Idk
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BrowserFrame } from "@/components/browser-frame";
import {
	IconBrandAmazon,
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandReddit,
	IconBrandSpotify,
	IconBrandTwitter,
	IconBrandYoutube,
	IconFileText,
	IconImageInPicture,
} from "@tabler/icons-react";

const secondBrainItems = [
	{
		type: "tweet",
		content: "Just launched our new AI-powered product! 🚀 #TechInnovation",
		author: "@techguru",
		tags: ["AI", "Product Launch", "Technology"],
	},
	{
		type: "reddit",
		content:
			"TIL: The human brain processes images 60,000 times faster than text.",
		subreddit: "r/todayilearned",
		tags: ["Brain", "Psychology", "Information Processing"],
		author: "@todayilearned",
	},
	{
		type: "instagram",
		content:
			"https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25462.jpg",
		description: "Colorful, nutrient-packed Buddha bowl",
		author: "@healthyfoodie",
		tags: ["Healthy Eating", "Food Photography", "Nutrition"],
	},
	{
		type: "amazon",
		content: "Wireless Noise-Cancelling Headphones",
		price: "$299.99",
		rating: 4.5,
		tags: ["Audio", "Technology", "Productivity"],
		author: "@amazon",
	},
	{
		type: "article",
		content: "10 Ways AI is Transforming Healthcare",
		source: "TechHealth Magazine",
		tags: ["AI", "Healthcare", "Innovation"],
		author: "@techhealthmagazine",
	},
	{
		type: "youtube",
		content: "https://youtube.com/watch?v=ai_future",
		title: "The Future of AI: Opportunities and Challenges",
		channel: "FutureTech",
		tags: ["AI", "Future Technology", "Ethics"],
	},
	{
		type: "note",
		content:
			"Remember to review the latest research on quantum computing for the upcoming project.",
		tags: ["Quantum Computing", "Research", "Project Management"],
		author: "@quantumresearcher",
	},
	{
		type: "tweet",
		content:
			"Just published a new blog post on the ethics of AI in social media. Check it out!",
		author: "@techethicist",
		tags: ["AI Ethics", "Social Media", "Technology"],
	},
	{
		type: "pdf",
		content: "Quantum Computing: A Comprehensive Guide",
		author: "Dr. Quantum Researcher",
		pages: 342,
		tags: ["Quantum Computing", "Physics", "Technology"],
	},
	{
		type: "spotify",
		content: "The AI Revolution",
		description:
			"A podcast series exploring the impact of AI on various industries",
		creator: "TechTalk",
		tags: ["AI", "Podcast", "Technology Trends"],
		author: "@techtalk",
	},
	{
		type: "github",
		content: "https://github.com/airesearcher/neural-network-from-scratch",
		description: "A Python implementation of a neural network from scratch",
		stars: 1200,
		tags: ["AI", "Machine Learning", "Python", "Open Source"],
		author: "@airesearcher",
	},
	{
		type: "video",
		content: "https://example.com/videos/quantum-entanglement-explained",
		title: "Quantum Entanglement Explained in 5 Minutes",
		duration: "5:23",
		tags: ["Quantum Physics", "Science", "Educational"],
		author: "@quantumresearcher",
	},
	{
		type: "image",
		content:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVNkoGZFJ56GRyu8pjoC6lvrjEJQtODYLew&s",
		description: "AI-generated artwork depicting a futuristic cityscape",
		tags: ["AI Art", "Futuristic", "Digital Art"],
		author: "@ai_artist",
	},
	{
		type: "recipe",
		content: "Vegan Buddha Bowl",
		ingredients: ["quinoa", "roasted vegetables", "avocado", "tahini dressing"],
		prepTime: "25 minutes",
		tags: ["Vegan", "Healthy Eating", "Recipe"],
		author: "@veganrecipes",
	},
	{
		type: "book",
		content: "The Singularity Is Near",
		author: "Ray Kurzweil",
		publishYear: 2005,
		tags: ["AI", "Futurism", "Technology"],
	},
	{
		type: "quote",
		content: "The only way to do great work is to love what you do.",
		author: "Steve Jobs",
		tags: ["Inspiration", "Career", "Success"],
	},
	{
		type: "research_paper",
		content: "Advancements in Quantum Computing: A Comprehensive Review",
		author: "Dr. Emily Quantum",
		journal: "Journal of Quantum Information",
		publicationYear: 2023,
		tags: ["Quantum Computing", "Research", "Technology"],
	},
	{
		type: "podcast",
		content: "The Future of AI in Healthcare",
		host: "Dr. Tech Health",
		duration: "45:30",
		tags: ["AI", "Healthcare", "Technology", "Podcast"],
	},
	{
		type: "code_snippet",
		content: `
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
    `,
		language: "Python",
		description: "Quicksort algorithm implementation",
		tags: ["Algorithm", "Sorting", "Python"],
	},
	{
		type: "conference",
		content: "International Conference on Machine Learning (ICML 2023)",
		location: "Honolulu, Hawaii",
		date: "July 23-29, 2023",
		tags: ["Machine Learning", "Conference", "AI"],
	},
	{
		type: "project_idea",
		content: "Develop an AI-powered personal finance advisor",
		description:
			"Create an app that uses machine learning to analyze spending habits and provide personalized financial advice.",
		tags: ["AI", "Finance", "App Development", "Project Idea"],
	},
];

export function SecondBrainDemo() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredItems, setFilteredItems] = useState(secondBrainItems);

	useEffect(() => {
		const filtered = secondBrainItems.filter((item) => {
			const searchTermLower = searchTerm.toLowerCase();
			return Object.values(item).some((value) => {
				if (Array.isArray(value)) {
					return value.some((v) =>
						String(v).toLowerCase().includes(searchTermLower)
					);
				}
				return String(value).toLowerCase().includes(searchTermLower);
			});
		});
		setFilteredItems(filtered);
	}, [searchTerm]);

	return (
		<BrowserFrame
			defaultUrl="1browser://second-brain"
			content={
				<div className="w-full h-[600px] bg-gradient-to-br from-gray-900 to-purple-900 text-foreground p-6 rounded-lg shadow-2xl relative overflow-hidden">
					<div className="mb-6">
						<input
							type="text"
							placeholder="Search your second brain..."
							className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div className="overflow-y-auto h-[calc(100%-4rem)] overflow-x-hidden">
						<ResponsiveMasonry
							columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
						>
							<Masonry gutter="1rem">
								{filteredItems.map((item, index) => (
									<SecondBrainItem item={item} key={index} />
								))}
							</Masonry>
						</ResponsiveMasonry>
					</div>
				</div>
			}
		/>
	);
}

function SecondBrainItem({
	item,
}: {
	item: (typeof secondBrainItems)[number];
}) {
	return (
		<AnimatePresence>
			<m.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
				className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
			>
				<div className="p-4">
					<ItemContent item={item} />
					<div className="mt-3 flex flex-wrap gap-2">
						{item.tags.map((tag, index) => (
							<span
								key={index}
								className="px-2 py-1 text-xs rounded-full bg-purple-700 text-white"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</m.div>
		</AnimatePresence>
	);
}

function ItemContent({ item }: { item: (typeof secondBrainItems)[number] }) {
	switch (item.type) {
		case "tweet":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconBrandTwitter className="w-4 h-4" />
						<p className="text-purple-400">{item.author}</p>
					</div>
					<p className="text-white">{item.content}</p>
					<p className="text-purple-400 mt-2">{item.author}</p>
				</div>
			);
		case "image":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconImageInPicture className="w-4 h-4" />
						<p className="text-purple-400">{item.author}</p>
					</div>
					<img
						src={item.content}
						alt={item.description}
						className="w-full rounded-lg"
					/>
					<p className="text-gray-300 mt-2">{item.description}</p>
				</div>
			);
		case "reddit":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconBrandReddit className="w-4 h-4" />
						<p className="text-purple-400">{item.subreddit}</p>
					</div>
					<p className="text-white">{item.content}</p>
				</div>
			);
		case "instagram":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconBrandInstagram className="w-4 h-4" />
						<p className="text-purple-400">{item.author}</p>
					</div>
					<img
						src={item.content}
						alt={item.description}
						className="w-full rounded-lg"
					/>
					<p className="text-gray-300 mt-2">{item.description}</p>
					<p className="text-purple-400">{item.author}</p>
				</div>
			);
		case "amazon":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconBrandAmazon className="w-4 h-4" />
						<p className="text-purple-400">{item.author}</p>
					</div>
					<p className="text-white font-bold">{item.content}</p>
					<p className="text-green-400">{item.price}</p>
					<p className="text-yellow-400">Rating: {item.rating}/5</p>
				</div>
			);
		case "article":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconFileText className="w-4 h-4" />
						<p className="text-purple-400">{item.source}</p>
					</div>
					<p className="text-white font-bold">{item.content}</p>
					<p className="text-purple-400 mt-2">{item.source}</p>
				</div>
			);
		case "youtube":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconBrandYoutube className="w-4 h-4" />
						<p className="text-purple-400">{item.channel}</p>
					</div>
					<img
						src={`https://img.youtube.com/vi/${
							item.content.split("v=")[1]
						}/0.jpg`}
						alt={item.title}
						className="w-full rounded-lg"
					/>
					<p className="text-white mt-2">{item.title}</p>
					<p className="text-purple-400">{item.channel}</p>
				</div>
			);
		case "note":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconFileText className="w-4 h-4" />
						<p className="text-purple-400">{item.author}</p>
					</div>
					<p className="text-white">{item.content}</p>
				</div>
			);
		case "pdf":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconFileText className="w-4 h-4" />
						<p className="text-purple-400">{item.author}</p>
					</div>
					<p className="text-white">{item.content}</p>
				</div>
			);
		case "spotify":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconBrandSpotify className="w-4 h-4" />
						<p className="text-purple-400">{item.creator}</p>
					</div>
					<p className="text-white">{item.content}</p>
				</div>
			);
		case "github":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconBrandGithub className="w-4 h-4" />
						<p className="text-purple-400">{item.description}</p>
					</div>
					<p className="text-white">{item.content}</p>
					<p className="text-yellow-400">Stars: {item.stars}</p>
				</div>
			);
		case "video":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconBrandYoutube className="w-4 h-4" />
						<p className="text-purple-400">{item.title}</p>
					</div>
					<p className="text-white">{item.content}</p>
					<p className="text-yellow-400">Duration: {item.duration}</p>
				</div>
			);
		case "recipe":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconFileText className="w-4 h-4" />
						<p className="text-purple-400">{item.author}</p>
					</div>
					<p className="text-white">{item.content}</p>
					<p className="text-purple-400">
						{item.ingredients?.join(", ") || "No ingredients provided"}
					</p>
					<p className="text-yellow-400">Prep Time: {item.prepTime}</p>
				</div>
			);
		case "book":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconFileText className="w-4 h-4" />
						<p className="text-purple-400">{item.author}</p>
					</div>
					<p className="text-white">{item.content}</p>
					<p className="text-yellow-400">Published: {item.publishYear}</p>
				</div>
			);
		case "quote":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconFileText className="w-4 h-4" />
						<p className="text-purple-400">{item.author}</p>
					</div>
					<p className="text-white">{item.content}</p>
					<p className="text-purple-400">{item.author}</p>
				</div>
			);
		case "research_paper":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconFileText className="w-4 h-4" />
						<p className="text-purple-400">{item.author}</p>
					</div>
					<p className="text-white">{item.content}</p>
				</div>
			);
		case "podcast":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconBrandSpotify className="w-4 h-4" />
						<p className="text-purple-400">{item.host}</p>
					</div>
					<p className="text-white">{item.content}</p>
				</div>
			);
		case "code_snippet":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconFileText className="w-4 h-4" />
						<p className="text-purple-400">{item.language}</p>
					</div>
					<pre className="text-white font-mono">{item.content}</pre>
				</div>
			);
		case "conference":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconFileText className="w-4 h-4" />
						<p className="text-purple-400">{item.location}</p>
					</div>
					<p className="text-white">{item.content}</p>
				</div>
			);
		case "project_idea":
			return (
				<div>
					<div className="flex items-center gap-2 mb-2">
						<IconFileText className="w-4 h-4" />
						<p className="text-purple-400">{item.description}</p>
					</div>
					<p className="text-white">{item.content}</p>
				</div>
			);
		default:
			return null;
	}
}
