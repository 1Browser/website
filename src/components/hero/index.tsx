"use client";

import React from "react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Arrow } from "./arrow";

export const Hero: React.FC = () => {
	return (
		<section className="relative min-h-screen overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0 opacity-20">
				{[...Array(20)].map((_, i) => (
					<m.div
						key={i}
						className="absolute bg-white rounded-full"
						style={{
							width: Math.random() * 5 + "px",
							height: Math.random() * 5 + "px",
							top: Math.random() * 100 + "%",
							left: Math.random() * 100 + "%",
						}}
						animate={{
							y: [0, -100],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: Math.random() * 5 + 5,
							repeat: Infinity,
							ease: "linear",
						}}
					/>
				))}
			</div>

			<div className="container mx-auto px-6 py-24 mt-24 relative z-10">
				<div className="flex flex-col items-center text-center">
					<m.h1
						className="text-6xl md:text-8xl font-extrabold mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
							Your{" "}
							<span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
								A
								<svg
									className="absolute bottom-0 left-0 w-full h-2"
									viewBox="0 0 100 10"
									preserveAspectRatio="none"
								>
									<path
										d="M0,5 Q25,9 50,5 T100,5"
										fill="none"
										stroke="url(#underline-gradient)"
										strokeWidth="2"
										className="animate-draw-path"
									/>
									<defs>
										<linearGradient
											id="underline-gradient"
											x1="0%"
											y1="0%"
											x2="100%"
											y2="0%"
										>
											<stop offset="0%" stopColor="#60A5FA" /> {/* blue-400 */}
											<stop offset="100%" stopColor="#DB2777" />{" "}
											{/* pink-600 */}
										</linearGradient>
									</defs>
								</svg>
							</span>
							ll{" "}
							<span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
								I
								<svg
									className="absolute bottom-0 left-0 w-full h-2"
									viewBox="0 0 100 10"
									preserveAspectRatio="none"
								>
									<path
										d="M0,5 Q25,9 50,5 T100,5"
										fill="none"
										stroke="url(#underline-gradient)"
										strokeWidth="2"
										className="animate-draw-path"
									/>
								</svg>
							</span>
							n 1Browser
						</span>
					</m.h1>
					<m.div
						className="text-xl md:text-2xl text-foreground mb-12 max-w-3xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<p style={{ lineHeight: 2 }}>
							The future is now - Imagine having{" "}
							<FeatureText text="ai agent" color="#60A5FA" />{" "}
							<FeatureText text="crypto" color="#FFD700" />{" "}
							<FeatureText text="inspiration" color="#FFC0CB" />{" "}
							<FeatureText text="privacy" color="#FFA500" />{" "}
							<FeatureText text="open information" color="#60A5FA" />, and more
							in 1 browser.
						</p>
					</m.div>
					<div className="relative">
						<m.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							<Button size="lg">Join Waitlist</Button>
						</m.div>

						<m.div
							className="absolute top-[50%] left-[100%]"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 1 }}
						>
							<Arrow />
						</m.div>
					</div>
				</div>
			</div>

			{/* Futuristic 3D element */}
			<m.div
				className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, delay: 0.6 }}
			>
				<div className="relative w-full h-64">
					<div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent rounded-t-full opacity-30"></div>
					<div
						className="absolute inset-0 bg-gradient-to-t from-blue-400 to-transparent rounded-t-full opacity-40"
						style={{ clipPath: "inset(25% 12.5% 0 12.5%)" }}
					></div>
				</div>
			</m.div>
		</section>
	);
};

function FeatureText({ text, color }: { text: string; color: string }) {
	return (
		<m.span
			style={{ color: color, borderColor: color }}
			whileHover={{ backgroundColor: color, color: "white" }}
			className={cn("border rounded-full px-2 py-1 ")}
		>
			{text}
		</m.span>
	);
}
