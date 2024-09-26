"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m as motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface HyperTextProps {
	text: string;
	duration?: number;
	framerProps?: Variants;
	className?: string;
	animateOnLoad?: boolean;
	loopInterval?: number; // New prop for loop interval
}

const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default function HyperText({
	text,
	duration = 800,
	framerProps = {
		initial: { opacity: 0, y: -10 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 3 },
	},
	className,
	animateOnLoad = true,
	loopInterval = 3000, // Default 3 seconds between loops
}: HyperTextProps) {
	const [displayText, setDisplayText] = useState(text.split(""));
	const interations = useRef(0);
	const isFirstRender = useRef(true);

	useEffect(() => {
		let interval: NodeJS.Timeout;
		let timeout: NodeJS.Timeout;

		const animate = () => {
			if (!animateOnLoad && isFirstRender.current) {
				isFirstRender.current = false;
				return;
			}

			interations.current = 0;

			interval = setInterval(() => {
				if (interations.current < text.length) {
					setDisplayText((t) =>
						t.map((l, i) =>
							l === " "
								? l
								: i <= interations.current
								? text[i]
								: alphabets[getRandomInt(26)]
						)
					);
					interations.current = interations.current + 0.1;
				} else {
					clearInterval(interval);

					// Schedule the next animation
					timeout = setTimeout(animate, loopInterval);
				}
			}, duration / (text.length * 10));
		};

		animate(); // Start the initial animation

		// Clean up intervals and timeouts on unmount
		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, [text, duration, animateOnLoad, loopInterval]);

	return (
		<div className="overflow-hidden py-2 flex cursor-default scale-100">
			<AnimatePresence mode="popLayout">
				{displayText.map((letter, i) => (
					<motion.h1
						key={i}
						className={cn(letter === " " ? "w-3" : "", className)}
						{...framerProps}
					>
						{letter}
					</motion.h1>
				))}
			</AnimatePresence>
		</div>
	);
}
