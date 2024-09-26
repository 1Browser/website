"use client";

import React, { useEffect, useRef, useState } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";
import noisePng from "./noise.png";

const Background: React.FC = () => {
	const svgRef = useRef<SVGSVGElement>(null);
	const [isScrolling, setIsScrolling] = useState(false);
	const scrollSpeedMultiplier = useMotionValue(1);
	const smoothScrollSpeedMultiplier = useSpring(scrollSpeedMultiplier, {
		damping: 20,
		stiffness: 100,
	});

	useEffect(() => {
		let scrollTimeout: NodeJS.Timeout;
		let lastScrollTop = window.pageYOffset;

		const handleScroll = () => {
			const currentScrollTop = window.pageYOffset;
			const scrollSpeed = Math.abs(currentScrollTop - lastScrollTop);
			lastScrollTop = currentScrollTop;

			setIsScrolling(true);
			scrollSpeedMultiplier.set(1 + scrollSpeed * 0.001);

			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => {
				setIsScrolling(false);
				scrollSpeedMultiplier.set(1);
			}, 150);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(scrollTimeout);
		};
	}, []);

	useEffect(() => {
		const animate = () => {
			if (svgRef.current) {
				const time = Date.now() * 0.0001;
				const filters = svgRef.current.querySelectorAll("feTurbulence");
				const currentSpeedMultiplier = smoothScrollSpeedMultiplier.get();

				filters.forEach((filter, index) => {
					const baseFrequencyX =
						(0.01 + Math.sin(time + index) * 0.0005) * currentSpeedMultiplier;
					const baseFrequencyY =
						(0.01 + Math.cos(time + index) * 0.0005) * currentSpeedMultiplier;
					filter.setAttribute(
						"baseFrequency",
						`${baseFrequencyX} ${baseFrequencyY}`
					);
				});
			}
			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			cancelAnimationFrame(requestAnimationFrame(animate));
		};
	}, []);

	return (
		<div
			className="fixed inset-0 w-full h-full -z-10"
			style={{
				backgroundImage: `url(${noisePng.src})`,
			}}
		>
			<Sparks />
			<svg
				className="fixed inset-0 w-full h-full opacity-50"
				ref={svgRef}
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#4158D0" />
						<stop offset="50%" stopColor="#C850C0" />
						<stop offset="100%" stopColor="#FFCC70" />
					</linearGradient>
					<filter id="noise1">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.01"
							numOctaves="3"
						/>
						<feDisplacementMap in="SourceGraphic" scale="60" />
					</filter>
					<filter id="noise2">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.015"
							numOctaves="4"
						/>
						<feDisplacementMap in="SourceGraphic" scale="50" />
					</filter>
				</defs>
				<rect width="100%" height="100%" fill="url(#grad1)" />
				<rect width="100%" height="100%" filter="url(#noise1)" opacity="0.3" />
				<rect width="100%" height="100%" filter="url(#noise2)" opacity="0.2" />
			</svg>
		</div>
	);
};

function Sparks() {
	return (
		<div className="fixed inset-0 opacity-20 -z-0 pointer-events-none">
			{[...Array(50)].map((_, i) => (
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
	);
}

export default Background;
