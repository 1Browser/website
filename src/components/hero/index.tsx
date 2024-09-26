"use client";

import React, { useEffect, useState } from "react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Arrow } from "./arrow";

export const Hero: React.FC = () => {
	return (
		<section className="relative min-h-screen overflow-x-hidden">
			<div className="container mx-auto px-6 py-24 mt-4 md:mt-24 relative z-10">
				<div className="flex flex-col items-center text-center">
					<ComingSoon />
					<m.div
						className="text-5xl md:text-8xl font-extrabold mb-6"
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
					</m.div>
					<m.div
						className="text-md md:text-2xl text-foreground mb-12 max-w-3xl my-8"
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
							<JoinWaitlist />
						</m.div>

						<m.div
							className="absolute top-[0%] left-[100%]"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 1 }}
						>
							<Arrow />
						</m.div>
					</div>
				</div>
			</div>

			{/* Futuristic 3D elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				{[...Array(5)].map((_, index) => (
					<FuturisticShape key={index} />
				))}
			</div>

			<ScrollToSeeMore />
		</section>
	);
};

function JoinWaitlist() {
	return (
		<Button
			onClick={() => {
				// rick roll
				window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
			}}
			size="lg"
		>
			Join Waitlist
		</Button>
	);
}

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

function ScrollToSeeMore() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const opacity = 1 - Math.min(scrollY / 500, 1);

	return (
		<m.div
			className="absolute bottom-20 w-full flex flex-col items-center"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: opacity, y: 0 }}
			transition={{ duration: 0.8, delay: 1.2 }}
			style={{ opacity }}
		>
			<p className="text-sm mx-auto text-gray-400 mb-2">scroll to the future</p>
			<m.div
				animate={{
					y: [0, 10, 0],
				}}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="text-gray-400"
				>
					<path d="M6 9l6 6 6-6" />
					<path d="M6 15l6 6 6-6" />
				</svg>
			</m.div>
		</m.div>
	);
}

const FuturisticShape: React.FC = () => {
	const shapes = ["square", "triangle", "circle", "hexagon"];
	const colors = [
		"rgb(96, 165, 250)", // blue-400
		"rgb(244, 114, 182)", // pink-400
		"rgb(192, 132, 252)", // purple-400
		"rgb(74, 222, 128)", // green-400
		"rgb(250, 204, 21)", // yellow-400
	];

	const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	const randomSize = Math.floor(Math.random() * (100 - 40 + 1) + 40);
	const randomPosition = {
		width: randomSize,
		height: randomSize,
		top: `${Math.random() * 100}%`,
		left: `${Math.random() * 100}%`,
	};

	const randomStartX = Math.floor(Math.random() * 360);
	const randomStartY = Math.floor(Math.random() * 360);
	const randomStartZ = Math.floor(Math.random() * 360);
	const randomOpacity = Math.random() * 0.5 + 0.1; // Adjust opacity range

	return (
		<m.div
			className="absolute"
			style={randomPosition}
			animate={{
				x: [0, Math.random() * 100 - 50], // Random horizontal movement
				y: [0, Math.random() * 100 - 50], // Random vertical movement
				rotateX: [randomStartX, randomStartX + 360],
				rotateY: [randomStartY, randomStartY + 360],
				rotateZ: [randomStartZ, randomStartZ + 360],
				opacity: [randomOpacity, randomOpacity / 2, randomOpacity],
			}}
			transition={{
				duration: Math.random() * 10 + 20, // Longer duration for slower movement
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "reverse",
			}}
		>
			<svg className="w-full h-full" viewBox="0 0 100 100">
				<defs>
					<filter id={`glow-${randomColor.replace(/[^a-zA-Z0-9]/g, "")}`}>
						<feGaussianBlur stdDeviation="3" result="coloredBlur" />
						<feMerge>
							<feMergeNode in="coloredBlur" />
							<feMergeNode in="coloredBlur" />
							<feMergeNode in="coloredBlur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>
				{getShapePath(randomShape, randomColor)}
			</svg>
		</m.div>
	);
};

function getShapePath(shape: string, color: string): JSX.Element {
	const commonProps = {
		fill: "none",
		stroke: color,
		strokeWidth: "4",
		filter: `url(#glow-${color.replace(/[^a-zA-Z0-9]/g, "")})`,
		opacity: 0.7,
	};

	switch (shape) {
		case "square":
			return <rect x="10" y="10" width="80" height="80" {...commonProps} />;
		case "triangle":
			return <polygon points="50,10 10,90 90,90" {...commonProps} />;
		case "circle":
			return <circle cx="50" cy="50" r="40" {...commonProps} />;
		case "hexagon":
			return (
				<polygon
					points="50,10 90,30 90,70 50,90 10,70 10,30"
					{...commonProps}
				/>
			);
		default:
			return <rect x="10" y="10" width="80" height="80" {...commonProps} />;
	}
}

import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

function ComingSoon() {
	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.1 }}
			className="z-10 flex items-center justify-center my-4"
		>
			<AnimatedGradientText>
				✨ <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
				<span
					className={cn(
						`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
					)}
				>
					Coming Soon
				</span>
				<ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
			</AnimatedGradientText>
		</m.div>
	);
}
