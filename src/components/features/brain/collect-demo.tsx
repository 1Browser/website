"use client";

import React, { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import { BrowserFrame } from "@/components/browser-frame";

const steps = [
	"Browse article",
	"Collect text",
	"Collect image",
	"Collect video",
	"Collect audio",
	"View collected items",
];
export function CollectDemo() {
	const [step, setStep] = useState(0);
	const [currentUrl, setCurrentUrl] = useState("https://example.com/article");
	const [collectedItems, setCollectedItems] = useState<string[]>([]);

	const updateUrl = useCallback((newStep: number) => {
		switch (newStep) {
			case 0:
				setCurrentUrl("https://example.com/article");
				break;
			case 1:
			case 2:
			case 3:
			case 4:
				setCurrentUrl(
					`https://example.com/article#${steps[newStep].toLowerCase()}`
				);
				break;
			case 5:
				setCurrentUrl("https://example.com/second-brain");
				break;
		}
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setStep((prevStep) => (prevStep + 1) % steps.length);
		}, 5000); // Increased duration to allow for animations

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		updateUrl(step);
		if (step > 0 && step < 5) {
			setCollectedItems((prev) => [...prev, steps[step].split(" ")[1]]);
		} else if (step === 0) {
			setCollectedItems([]);
		}
	}, [step, updateUrl]);

	return (
		<BrowserFrame
			defaultUrl={currentUrl}
			content={
				<div className="w-full h-[500px] bg-gradient-to-br from-gray-900 to-blue-900 text-foreground p-4 rounded-lg shadow-2xl relative overflow-hidden">
					<AnimatePresence mode="popLayout">
						{step === 0 && <BrowsingContent key="browsing" />}
						{step === 1 && <CollectingContent key="text" type="text" />}
						{step === 2 && <CollectingContent key="image" type="image" />}
						{step === 3 && <CollectingContent key="video" type="video" />}
						{step === 4 && <CollectingContent key="audio" type="audio" />}
						{step === 5 && (
							<SecondBrainView
								key="second-brain"
								collectedItems={collectedItems}
							/>
						)}
					</AnimatePresence>
					<MouseCursor step={step} />
				</div>
			}
		/>
	);
}

function MouseCursor({ step }: { step: number }) {
	const [showClick, setShowClick] = useState(false);

	useEffect(() => {
		setTimeout(() => setShowClick(true), 2500);
		setTimeout(() => setShowClick(false), 3000);
	}, [step]);

	return (
		<m.div
			className="absolute w-6 h-6 pointer-events-none z-50"
			initial={{ opacity: 0, x: "-50%", y: "-50%", left: "50%", top: "50%" }}
			animate={
				step < 5
					? {
							opacity: 1,
							x: ["-50%", "-25%", "0%"],
							y: ["-50%", "-25%", "0%"],
							left: ["50%", "50%", "60%"],
							top: ["50%", "50%", "60%"],
					  }
					: { opacity: 0 }
			}
			transition={{
				duration: 3,
				times: [0, 0.6, 1],
				repeat: 1,
				repeatDelay: 1,
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="white"
				className="drop-shadow-lg"
			>
				<path d="M3.1 0L12 20.7l2.1-9.8L24 9.1 3.1 0z" />
			</svg>
			{step > 0 && step < 5 && showClick && (
				<m.div
					className="absolute top-[-50%] left-[-50%] w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full"
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
					transition={{ duration: 0.5, times: [0, 0.5, 1] }}
				/>
			)}
		</m.div>
	);
}

function BrowsingContent() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="h-full flex flex-col"
		>
			<h1 className="text-3xl font-bold mb-4">Fascinating Article</h1>
			<p className="mb-4">
				This is an interesting article about various topics...
			</p>
			<div className="flex space-x-4 mb-4">
				<div className="w-1/3 h-32 bg-blue-700 rounded-lg"></div>
				<div className="w-1/3 h-32 bg-blue-700 rounded-lg"></div>
				<div className="w-1/3 h-32 bg-blue-700 rounded-lg"></div>
			</div>
			<p>More content goes here...</p>
		</m.div>
	);
}

function CollectingContent({ type }: { type: string }) {
	return (
		<m.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 1.1 }}
			className="h-full flex flex-col items-center justify-center"
		>
			<div className="relative w-64 h-64 bg-blue-700 rounded-lg mb-4">
				{type === "text" && (
					<p className="p-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Quisquam, quos.
					</p>
				)}
				{type === "image" && (
					<div className="w-full h-full bg-blue-500 rounded-lg flex items-center justify-center">
						<svg
							className="w-16 h-16 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</div>
				)}
				{type === "video" && (
					<div className="w-full h-full bg-blue-600 rounded-lg flex items-center justify-center">
						<svg
							className="w-16 h-16 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
				)}
				{type === "audio" && (
					<div className="w-full h-full bg-blue-800 rounded-lg flex items-center justify-center">
						<svg
							className="w-16 h-16 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
							/>
						</svg>
					</div>
				)}
				<m.div
					className="absolute -right-4 -bottom-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 30,
						delay: 2.5,
					}}
				>
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</m.div>
			</div>
			<p className="text-xl font-semibold">Collect {type} with 1 click</p>
		</m.div>
	);
}

function SecondBrainView({ collectedItems }: { collectedItems: string[] }) {
	return (
		<m.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			className="h-full flex flex-col"
		>
			<h2 className="text-3xl font-bold mb-4">Your Second Brain</h2>
			<div className="grid grid-cols-2 gap-4">
				{collectedItems.map((item, index) => (
					<m.div
						key={index}
						className="bg-blue-700 p-4 rounded-lg"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: index * 0.1 }}
					>
						<p className="font-semibold">{item} content</p>
						<p className="text-sm text-blue-300">Collected from example.com</p>
					</m.div>
				))}
			</div>
		</m.div>
	);
}
