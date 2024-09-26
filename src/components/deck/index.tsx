"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { m, AnimatePresence } from "framer-motion";

import deck1 from "./images/deck.001.jpeg";
import deck2 from "./images/deck.002.jpeg";
import deck3 from "./images/deck.003.jpeg";
import deck4 from "./images/deck.004.jpeg";
import deck5 from "./images/deck.005.jpeg";
import deck6 from "./images/deck.006.jpeg";
import deck7 from "./images/deck.007.jpeg";
import deck8 from "./images/deck.008.jpeg";
import deck9 from "./images/deck.009.jpeg";
import deck10 from "./images/deck.010.jpeg";
import deck11 from "./images/deck.011.jpeg";
import deck12 from "./images/deck.012.jpeg";
import deck13 from "./images/deck.013.jpeg";
import deck14 from "./images/deck.014.jpeg";
import deck15 from "./images/deck.015.jpeg";
import deck16 from "./images/deck.016.jpeg";
import deck17 from "./images/deck.017.jpeg";
import deck18 from "./images/deck.018.jpeg";
import deck19 from "./images/deck.019.jpeg";
import deck20 from "./images/deck.020.jpeg";
import deck21 from "./images/deck.021.jpeg";
import deck22 from "./images/deck.022.jpeg";
import deck23 from "./images/deck.023.jpeg";
import deck24 from "./images/deck.024.jpeg";
import deck25 from "./images/deck.025.jpeg";

const images = [
	deck1,
	deck2,
	deck3,
	deck4,
	deck5,
	deck6,
	deck7,
	deck8,
	deck9,
	deck10,
	deck11,
	deck12,
	deck13,
	deck14,
	deck15,
	deck16,
	deck17,
	deck18,
	deck19,
	deck20,
	deck21,
	deck22,
	deck23,
	deck24,
	deck25,
];

const variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 1000 : -1000,
		opacity: 0,
	}),
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => ({
		zIndex: 0,
		x: direction < 0 ? 1000 : -1000,
		opacity: 0,
	}),
};

export function Deck() {
	const [[page, direction], setPage] = useState([0, 0]);
	const [isAutoPlaying, setIsAutoPlaying] = useState(false);
	const [progress, setProgress] = useState(0);

	const imageIndex = ((page % images.length) + images.length) % images.length;

	const nextImageIndex = useRef((imageIndex + 1) % images.length);

	const paginate = useCallback(
		(newDirection: number) => {
			setPage([page + newDirection, newDirection]);
		},
		[page]
	);

	const toggleAutoPlay = () => {
		setIsAutoPlaying((prev) => !prev);
	};

	useEffect(() => {
		nextImageIndex.current = (imageIndex + 1) % images.length;
	}, [imageIndex]);

	useEffect(() => {
		let interval: NodeJS.Timeout;
		let animationFrame: number;

		if (isAutoPlaying) {
			const startTime = Date.now();
			const animate = () => {
				const elapsedTime = Date.now() - startTime;
				const newProgress = (elapsedTime % 5000) / 5000;
				setProgress(newProgress);

				if (elapsedTime >= 5000) {
					paginate(1);
				} else {
					animationFrame = requestAnimationFrame(animate);
				}
			};

			animate();
			interval = setInterval(() => {
				paginate(1);
			}, 5000);
		}

		return () => {
			clearInterval(interval);
			cancelAnimationFrame(animationFrame);
		};
	}, [isAutoPlaying, paginate]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
			<div className="relative w-full max-w-5xl aspect-[16/9] mb-8 overflow-hidden rounded-lg shadow-2xl">
				<AnimatePresence initial={false} custom={direction}>
					<m.div
						key={page}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 },
						}}
						className="absolute inset-0"
					>
						<Image
							src={images[imageIndex]}
							alt={`Slide ${imageIndex + 1}`}
							layout="fill"
							objectFit="cover"
							onClick={() => paginate(1)}
							className="cursor-pointer"
						/>
					</m.div>
				</AnimatePresence>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
				<ImagePreloader src={images[nextImageIndex.current]} />
			</div>
			<div className="flex items-center space-x-6">
				<m.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => paginate(-1)}
					className="p-3 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-colors duration-300"
				>
					<IconArrowLeft size={24} />
				</m.button>
				<div className="flex flex-col items-center">
					<span className="text-2xl font-bold mb-2">
						{imageIndex + 1} / {images.length}
					</span>
					<m.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={toggleAutoPlay}
						className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 relative overflow-hidden ${
							isAutoPlaying
								? "bg-red-800 hover:bg-red-700"
								: "bg-green-800 hover:bg-green-700"
						}`}
					>
						{isAutoPlaying && (
							<m.div
								className="absolute inset-0 bg-red-600 origin-left"
								style={{ scaleX: progress }}
							/>
						)}
						<span className="relative z-10">
							{isAutoPlaying ? "Stop Auto-Play" : "Start Auto-Play"}
						</span>
					</m.button>
				</div>
				<m.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => paginate(1)}
					className="p-3 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-colors duration-300"
				>
					<IconArrowRight size={24} />
				</m.button>
			</div>
		</div>
	);
}

function ImagePreloader({ src }: { src: string | StaticImageData }) {
	return <Image src={src} alt="Preload" layout="fill" className="hidden" />;
}
