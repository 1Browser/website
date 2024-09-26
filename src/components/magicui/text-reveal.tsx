"use client";

import { FC, ReactNode, useRef, useMemo } from "react";
import { m as motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
	text: string | string[];
	className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
	text,
	className,
}) => {
	const targetRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end center"],
	});

	const pArr = Array.isArray(text) ? text : [text];

	// Calculate total word count
	const totalWords = useMemo(() => {
		return pArr.reduce(
			(acc, paragraph) => acc + paragraph.split(" ").length,
			0
		);
	}, [pArr]);

	let wordCounter = 0;

	return (
		<div className={cn("relative z-0 h-[130vh]", className)}>
			<div
				className={
					"sticky top-0 mx-auto flex items-center bg-transparent px-[1rem] py-[5rem]"
				}
			>
				<div ref={targetRef}>
					{pArr.map((paragraph, i) => {
						return (
							<p
								className="flex flex-wrap items-end p-5 text-2xl text-foreground/20 md:text-3xl lg:text-4xl xl:text-5xl"
								key={i}
							>
								{paragraph.split(" ").map((word, j) => {
									const start = wordCounter / totalWords;
									wordCounter++;
									const end = wordCounter / totalWords;
									return (
										<Word
											key={j}
											progress={scrollYProgress}
											range={[start, end]}
										>
											{word}
										</Word>
									);
								})}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

interface WordProps {
	children: ReactNode;
	progress: any;
	range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	const isFirstWord = children === "In"; // hard coded first word
	return (
		<span
			className={cn(
				"xl:lg-3 relative mx-1 lg:mx-2.5",
				isFirstWord && "font-bold italic text-[4rem]"
			)}
		>
			<span className={"absolute left-0 top-0 opacity-30"}>{children}</span>
			<motion.span style={{ opacity: opacity }} className={"text-foreground"}>
				{children}
			</motion.span>
		</span>
	);
};

export default TextRevealByWord;
