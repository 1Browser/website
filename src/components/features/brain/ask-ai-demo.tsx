"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { BrowserFrame } from "@/components/browser-frame";

const collectedInfo = [
	{
		type: "article",
		title: "The Future of AI in Healthcare",
		date: "2023-05-10",
	},
	{ type: "video", title: "Machine Learning Basics", date: "2024-05-12" },
	{ type: "podcast", title: "Ethics in AI", date: "2024-05-14" },
	{ type: "note", title: "Ideas for AI Project", date: "2024-05-15" },
	{ type: "book", title: "Deep Learning Revolution", date: "2024-05-16" },
];

const aiResponse = `Based on your collected information this week:

1. You've been focusing on AI applications in healthcare, as evidenced by the article "The Future of AI in Healthcare".
2. You've been learning about machine learning fundamentals through the video "Machine Learning Basics".
3. You've shown interest in AI ethics by listening to the "Ethics in AI" podcast.
4. You've been brainstorming ideas for an AI project, as noted in your personal notes.
5. You're deepening your understanding of AI with the book "Deep Learning Revolution".

Overall, it seems you're exploring various aspects of AI, from practical applications to ethical considerations, while also working on your own project ideas.`;

const steps = ["Idle", "Enter query", "AI processing", "View response"];

export function AskAIDemo() {
	const [step, setStep] = useState(0);
	const [query, setQuery] = useState("");
	const [displayedResponse, setDisplayedResponse] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setStep((prevStep) => (prevStep + 1) % steps.length);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (step === 0) {
			setQuery("");
			setDisplayedResponse("");
		}
	}, [step]);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (step === 1) {
			const toType = "what did i collect this week?";
			let i = 0;
			timer = setInterval(() => {
				setQuery(toType.slice(0, i));
				i++;
				if (i > toType.length) {
					clearInterval(timer);
				}
			}, 100);
		}
		return () => timer && clearInterval(timer);
	}, [step]);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (step === 3) {
			let i = 0;
			timer = setInterval(() => {
				setDisplayedResponse(aiResponse.slice(0, i));
				i++;
				if (i > aiResponse.length) {
					clearInterval(timer);
				}
			}, 20);
		}
		return () => timer && clearInterval(timer);
	}, [step]);

	return (
		<BrowserFrame
			defaultUrl="1browser://second-brain#ask-ai"
			content={
				<div className="w-full h-[600px] bg-gradient-to-br from-gray-900 to-purple-900 text-foreground p-6 rounded-lg shadow-2xl relative overflow-hidden">
					<CollectedItems />
					<AnimatePresence mode="popLayout">
						{step === 0 && <QueryInput key="input" query={query} />}
						{step === 1 && <QueryInput key="input" query={query} />}
						{step === 2 && <AIProcessing key="processing" />}
						{step === 3 && (
							<AIResponse key="response" response={displayedResponse} />
						)}
					</AnimatePresence>
				</div>
			}
		/>
	);
}

function QueryInput({ query }: { query: string }) {
	return (
		<m.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			className="mb-4"
		>
			<input
				type="text"
				placeholder="Ask your Second Brain AI..."
				className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
				value={query}
				readOnly
			/>
		</m.div>
	);
}

function AIProcessing() {
	return (
		<m.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 1.1 }}
			className="flex flex-col items-center justify-center h-64"
		>
			<div className="w-16 h-16 border-t-4 border-purple-500 border-solid rounded-full animate-spin"></div>
			<p className="mt-4 text-xl font-semibold text-purple-300">
				AI is processing your query...
			</p>
		</m.div>
	);
}

function AIResponse({ response }: { response: string }) {
	return (
		<m.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			className="bg-gray-800 rounded-lg p-4 mb-4 overflow-y-auto max-h-64"
		>
			<h2 className="text-2xl font-bold mb-2 text-purple-300">AI Response:</h2>
			<p className="text-white whitespace-pre-line">{response}</p>
		</m.div>
	);
}

function CollectedItems() {
	return (
		<div className="my-4">
			<h3 className="text-xl font-semibold mb-2 text-purple-300">
				Recently Collected Items:
			</h3>
			<div className="grid grid-cols-2 gap-2">
				{collectedInfo.map((item, index) => (
					<m.div
						key={index}
						className="bg-gray-800 p-2 rounded-lg"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: index * 0.1 }}
					>
						<p className="text-sm font-semibold text-purple-300">{item.type}</p>
						<p className="text-white truncate">{item.title}</p>
						<p className="text-xs text-gray-400">{item.date}</p>
					</m.div>
				))}
			</div>
		</div>
	);
}
