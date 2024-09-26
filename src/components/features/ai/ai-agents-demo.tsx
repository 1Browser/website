"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { BrowserFrame } from "../../browser-frame";

const steps = [
	"Analyzing user preferences",
	"Searching for ideal shoe",
	"Adding to cart",
	"Applying best discount",
	"Completing checkout",
];
export function AiAgentsDemo() {
	const [step, setStep] = useState(0);
	const [isComplete, setIsComplete] = useState(false);
	const [currentUrl, setCurrentUrl] = useState("https://ai-shoe-store.com");
	useEffect(() => {
		const interval = setInterval(() => {
			if (step <= steps.length - 1) {
				setStep((prevStep) => {
					const nextStep = prevStep + 1;
					updateUrl(nextStep);
					return nextStep;
				});
			}
		}, 3000);

		return () => clearInterval(interval);
	}, [step]);

	useEffect(() => {
		if (step > steps.length - 1 && !isComplete) {
			setIsComplete(true);
		}
	}, [isComplete, step]);

	useEffect(() => {
		// reset the step to 0
		let timer: NodeJS.Timeout;
		if (isComplete) {
			timer = setTimeout(() => {
				setStep(0);
				setIsComplete(false);
			}, 1500);
		}
		return () => timer && clearTimeout(timer);
	}, [isComplete]);

	const updateUrl = (newStep: number) => {
		switch (newStep) {
			case 1:
				setCurrentUrl("https://shoe-store.com/catalog");
				break;
			case 2:
				setCurrentUrl("https://shoe-store.com/product/shoe-model-2");
				break;
			case 3:
				setCurrentUrl("https://shoe-store.com/cart");
				break;
			case 4:
				setCurrentUrl("https://shoe-store.com/checkout");
				break;
			case 5:
				setCurrentUrl("https://shoe-store.com/order-confirmation");
				break;
		}
	};

	const content = (
		<div className="w-[calc(100%-310px)] h-[500px] flex flex-col justify-center items-center overflow-hidden p-2 bg-background">
			<AnimatePresence mode="popLayout">
				{step === 0 && (
					<m.div
						key="welcome"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="text-center"
					>
						<h1 className="text-2xl font-bold mb-4">Welcome to Shoe Store</h1>
						<p>1Browser AI assistant is analyzing your preferences...</p>
					</m.div>
				)}
				{step === 1 && (
					<m.div
						key="catalog"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
					>
						<h1 className="text-2xl font-bold mb-4">Shoe Catalog</h1>
						<div className="grid grid-cols-2 grid-rows-2 gap-4">
							{[1, 2, 3, 4].map((i) => (
								<div key={i} className="bg-zinc-800 p-4 rounded">
									<div className="bg-zinc-700 h-32 mb-2 rounded"></div>
									<p className="font-semibold">Shoe Model {i}</p>
									<p className="text-sm text-foreground">$99.99</p>
								</div>
							))}
						</div>
					</m.div>
				)}
				{step === 2 && (
					<m.div
						key="product"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 1.1 }}
					>
						<h2 className="text-xl font-bold mb-2">Selected Shoe</h2>
						<div className="bg-zinc-800 p-4 rounded flex items-center">
							<div className="bg-zinc-700 h-24 w-24 mr-4 rounded"></div>
							<div>
								<p className="font-semibold">Shoe Model 2</p>
								<p className="text-sm text-foreground">$99.99</p>
								<button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
									Add to Cart
								</button>
							</div>
						</div>
					</m.div>
				)}
				{step === 3 && (
					<m.div
						key="cart"
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
					>
						<h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
						<div className="bg-zinc-800 p-4 rounded">
							<p>Shoe Model 2 - $99.99</p>
							<p className="font-semibold mt-2">Total: $99.99</p>
						</div>
					</m.div>
				)}
				{step === 4 && (
					<m.div
						key="discount"
						initial={{ opacity: 0, rotate: -10 }}
						animate={{ opacity: 1, rotate: 0 }}
						exit={{ opacity: 0, rotate: 10 }}
					>
						<h2 className="text-xl font-bold mb-2">Applied Discount</h2>
						<div className="bg-zinc-800 p-4 rounded">
							<p className="text-green-700">10% discount applied!</p>
							<p className="font-semibold mt-2">New Total: $89.99</p>
						</div>
					</m.div>
				)}
				{isComplete && (
					<m.div
						key="complete"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "spring", stiffness: 500, damping: 30 }}
						className="bg-zinc-800 p-4 rounded"
					>
						<p className="text-green-700 font-semibold">
							Order completed successfully!
						</p>
						<p>Thank you for your purchase.</p>
					</m.div>
				)}
			</AnimatePresence>
		</div>
	);

	const sidePanel = (
		<div className="w-[300px] h-[500px] flex flex-col justify-center items-center overflow-hidden bg-zinc-900 text-foreground p-2 rounded-lg shadow-xl">
			<h2 className="text-2xl font-bold mb-4">AI Shopping Assistant</h2>
			<div className="space-y-4">
				{steps.map((s, index) => (
					<m.div
						key={index}
						className={`flex items-center space-x-3 ${
							index <= step ? "text-blue-400" : "text-zinc-500"
						}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.2 }}
					>
						<div
							className={`w-6 h-6 rounded-full flex items-center justify-center ${
								index < step
									? "bg-blue-500"
									: index === step
									? "bg-blue-400 animate-pulse"
									: "bg-zinc-700"
							}`}
						>
							{index < step ? (
								<svg
									className="w-4 h-4 text-foreground"
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
							) : index === step ? (
								<div className="w-3 h-3 bg-foreground rounded-full animate-ping" />
							) : null}
						</div>
						<span>{s}</span>
					</m.div>
				))}
			</div>
		</div>
	);

	return (
		<BrowserFrame
			defaultUrl={currentUrl}
			content={content}
			sidePanel={sidePanel}
		/>
	);
}
