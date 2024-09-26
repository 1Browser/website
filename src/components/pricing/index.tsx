"use client";

import { IconCheck } from "@tabler/icons-react";
import { m } from "framer-motion";
import ShinyButton from "../magicui/shiny-button";
import { useState } from "react";

const tiers = [
	{
		name: "Premium",
		price: { monthly: 10, yearly: 99 },
		features: [
			"Full mode access",
			"AI-powered browsing assistance",
			"Powerful Second-brain",
			"Web3-native browsing",
			"Collaborative with friends",
			"Remix content effortlessly",
			"Privacy-focused features",
		],
	},
	{
		name: "Believer",
		price: { monthly: 20, yearly: 199 },
		features: [
			"Everything in Premium",
			"Custom browser theme",
			"Insider feature preview",
			"Priority support",
			"Priority access in decentralized computing sharing",
			"A proof of supporting open information",
		],
	},
];

export function Pricing() {
	const [isYearly, setIsYearly] = useState(true);

	return (
		<section className="bg-gradient-to-b py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-base font-semibold leading-7 text-indigo-400">
						Pricing
					</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
						Choose your 1Browser experience
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
					Unlock the full potential of AI-powered browsing with our flexible
					pricing options.
				</p>

				<div className="flex justify-center mt-8">
					<div className="relative flex items-center bg-white/10 rounded-full p-1">
						<button
							className={`${
								!isYearly ? "bg-indigo-500 text-white" : "text-gray-300"
							} relative rounded-full py-2 px-4 text-sm font-semibold transition-all duration-300 focus:outline-none`}
							onClick={() => setIsYearly(false)}
						>
							Monthly
						</button>
						<button
							className={`${
								isYearly ? "bg-indigo-500 text-white" : "text-gray-300"
							} relative rounded-full py-2 px-4 text-sm font-semibold transition-all duration-300 focus:outline-none`}
							onClick={() => setIsYearly(true)}
						>
							Yearly
						</button>
					</div>
				</div>

				<div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none">
					{tiers.map((tier, tierIdx) => (
						<m.div
							key={tier.name}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: tierIdx * 0.2 }}
							className="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10"
						>
							<div>
								<div className="flex items-center justify-between gap-x-4">
									<h3 className="text-lg font-semibold leading-8 text-white">
										{tier.name}
									</h3>
									{tierIdx === 1 && (
										<p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
											Most popular
										</p>
									)}
								</div>
								<p className="mt-4 text-sm leading-6 text-gray-300">
									{tier.name === "Believer"
										? "For the true open information enthusiasts"
										: "For professionals and teams"}
								</p>
								<div className="flex items-end gap-x-2">
									<p className="mt-6 flex items-baseline gap-x-1">
										<span className="text-4xl font-bold tracking-tight text-white">
											${isYearly ? tier.price.yearly : tier.price.monthly}
										</span>
										<span className="text-sm font-semibold leading-6 text-gray-300">
											/{isYearly ? "year" : "month"}
										</span>
									</p>
									{isYearly && (
										<p className="mt-1 text-sm leading-6 text-gray-300">
											Save{" "}
											{Math.round(
												(1 - tier.price.yearly / (tier.price.monthly * 12)) *
													100
											)}
											%
										</p>
									)}
								</div>
								<ul
									role="list"
									className="mt-8 space-y-3 text-sm leading-6 text-gray-300"
								>
									{tier.features.map((feature) => (
										<li key={feature} className="flex gap-x-3">
											<IconCheck
												className="h-6 w-5 flex-none text-indigo-400"
												aria-hidden="true"
											/>
											{feature}
										</li>
									))}
								</ul>
							</div>
							<ShinyButton>Get Started</ShinyButton>
						</m.div>
					))}
				</div>

				<p className="text-sm text-gray-300 mx-auto mt-16 text-center">
					*Note: To support open information, there will not be a free tier.*
				</p>
			</div>
		</section>
	);
}
