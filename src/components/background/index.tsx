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
			scrollSpeedMultiplier.set(1 + scrollSpeed * 0.01);

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
						(0.01 + Math.sin(time + index) * 0.005) * currentSpeedMultiplier;
					const baseFrequencyY =
						(0.01 + Math.cos(time + index) * 0.005) * currentSpeedMultiplier;
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
						<feDisplacementMap in="SourceGraphic" scale="50" />
					</filter>
					<filter id="noise2">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.015"
							numOctaves="4"
						/>
						<feDisplacementMap in="SourceGraphic" scale="40" />
					</filter>
				</defs>
				<rect width="100%" height="100%" fill="url(#grad1)" />
				<rect width="100%" height="100%" filter="url(#noise1)" opacity="0.3" />
				<rect width="100%" height="100%" filter="url(#noise2)" opacity="0.2" />
			</svg>
		</div>
	);
};

export default Background;
