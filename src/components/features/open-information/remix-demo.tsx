"use client";
import { BrowserFrame } from "@/components/browser-frame";
import { m, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
	IconBrandTwitter,
	IconBrandReddit,
	IconBrandDiscord,
	IconBrandTelegram,
	IconBrandInstagram,
	IconDotsVertical,
	IconWand,
	IconSend,
	IconLoader2,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const originalTweet = {
	author: "@TechGuru",
	content:
		"AI is revolutionizing web development. The future is here, and it's exciting! #AI #WebDev",
	likes: 1337,
	retweets: 42,
};

const remixedContent = {
	title: "The Future of Web Development",
	content:
		"Artificial Intelligence is reshaping the landscape of web development, bringing unprecedented possibilities and excitement to the field.",
	gradient: "from-blue-500 to-purple-600",
};

const shareOptions = [
	{ icon: IconBrandTwitter, name: "Twitter", color: "bg-blue-400" },
	{ icon: IconBrandReddit, name: "Reddit", color: "bg-orange-500" },
	{ icon: IconBrandDiscord, name: "Discord", color: "bg-indigo-500" },
	{ icon: IconBrandTelegram, name: "Telegram", color: "bg-sky-500" },
	{ icon: IconBrandInstagram, name: "Instagram", color: "bg-pink-500" },
];

export function RemixDemo() {
	const [stage, setStage] = useState(0);
	const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
	const [isClicking, setIsClicking] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const tweetRef = useRef<HTMLDivElement>(null);
	const remixButtonRef = useRef<HTMLButtonElement>(null);
	const telegramButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setStage((prevStage) => (prevStage + 1) % 7);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		let timers: NodeJS.Timeout[] = [];
		if (!containerRef.current) return;

		const containerRect = containerRef.current.getBoundingClientRect();

		const setCursorToElementCenter = (
			element: HTMLElement,
			isTelegram?: boolean
		) => {
			const rect = element.getBoundingClientRect();
			if (isTelegram) {
				setCursorPosition({
					x: rect.left - containerRect.left + rect.width / 2 - 50,
					y: rect.top - containerRect.top + rect.height / 2 - 50,
					// i don't know why but i had to hard fix the position
				});
			} else {
				setCursorPosition({
					x: rect.left - containerRect.left + rect.width / 2,
					y: rect.top - containerRect.top + rect.height / 2,
				});
			}
		};

		if (stage === 0 && tweetRef.current) {
			setCursorToElementCenter(tweetRef.current);
		} else if (stage === 1 && remixButtonRef.current) {
			setCursorToElementCenter(remixButtonRef.current);
			if (timers.length) {
				timers.forEach((timer) => clearTimeout(timer));
			}
			timers = simulateClick();
		} else if (stage === 5 && telegramButtonRef.current) {
			// Delay the cursor movement to ensure the button has rendered
			setTimeout(() => {
				if (telegramButtonRef.current) {
					setCursorToElementCenter(telegramButtonRef.current, true);
					if (timers.length) {
						timers.forEach((timer) => clearTimeout(timer));
					}
					timers = simulateClick();
				}
			}, 100);
		}

		return () => timers.forEach((timer) => clearTimeout(timer));
	}, [stage]);

	const simulateClick = () => {
		return [
			setTimeout(() => setIsClicking(true), 1000),
			setTimeout(() => setIsClicking(false), 1500),
		];
	};

	return (
		<BrowserFrame
			defaultUrl="1browser://twitter"
			content={
				<div
					ref={containerRef}
					className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 min-h-[600px] relative w-full overflow-hidden"
				>
					{/* cursor */}
					<m.div
						className="w-6 h-6 rounded-full bg-white shadow-lg absolute pointer-events-none z-50"
						animate={{
							x: cursorPosition.x - 12, // Adjust by half the cursor width
							y: cursorPosition.y - 12, // Adjust by half the cursor height
							scale: isClicking ? 0.5 : 1,
							boxShadow: isClicking
								? "0 0 0 4px rgba(255,255,255,0.5)"
								: "0 0 0 0px rgba(255,255,255,0)",
						}}
						transition={{
							type: "spring",
							stiffness: 500,
							damping: 28,
							boxShadow: { duration: 0.1 },
						}}
					/>

					<AnimatePresence mode="popLayout">
						{stage < 3 && (
							<m.div
								key="twitter"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="absolute inset-0 flex items-center justify-center"
							>
								<div
									ref={tweetRef}
									className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-md w-full"
								>
									<div className="flex items-center mb-4">
										<IconBrandTwitter className="text-blue-400 mr-2" />
										<span className="font-bold">{originalTweet.author}</span>
									</div>
									<p className="text-lg mb-4">{originalTweet.content}</p>
									<div className="flex justify-between text-gray-400">
										<span>{originalTweet.likes} Likes</span>
										<span>{originalTweet.retweets} Retweets</span>
									</div>
								</div>
							</m.div>
						)}
						{stage === 3 && (
							<m.div
								key="loading"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="absolute inset-0 flex items-center justify-center"
							>
								<div className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-md w-full flex flex-col items-center">
									<IconLoader2 className="w-12 h-12 text-blue-400 animate-spin mb-4" />
									<p className="text-lg font-semibold">Remixing content...</p>
									<p className="text-sm text-gray-400 mt-2">Please wait</p>
								</div>
							</m.div>
						)}
						{stage >= 4 && stage < 6 && (
							<m.div
								key="remixed"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.5 }}
								className="absolute inset-0 flex items-center justify-center"
							>
								<div
									className={`bg-gradient-to-br ${remixedContent.gradient} rounded-lg p-6 shadow-lg max-w-md w-full text-white`}
								>
									<h3 className="text-2xl font-bold mb-4">
										{remixedContent.title}
									</h3>
									<p className="text-lg mb-4">{remixedContent.content}</p>
									<div className="flex justify-end">
										<span className="text-sm opacity-75">
											Remixed with 1Browser
										</span>
									</div>
								</div>
							</m.div>
						)}
						{stage === 6 && (
							<m.div
								key="telegram"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="absolute inset-0 flex items-center justify-center bg-[#1c2733]"
							>
								<div className="w-full max-w-2xl h-[500px] bg-[#17212b] rounded-lg shadow-lg flex flex-col">
									<div className="bg-[#242f3d] p-4 rounded-t-lg flex items-center">
										<IconBrandTelegram
											className="text-[#5cabdb] mr-2"
											size={24}
										/>
										<span className="font-bold text-lg">Your Channel</span>
									</div>
									<div className="flex-grow p-4 overflow-y-auto">
										<m.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.5 }}
											className={`bg-gradient-to-br ${remixedContent.gradient} rounded-lg p-4 shadow-md max-w-sm ml-auto`}
										>
											<h3 className="text-xl font-bold mb-2">
												{remixedContent.title}
											</h3>
											<p className="text-sm">{remixedContent.content}</p>
											<div className="flex justify-end mt-2">
												<span className="text-xs opacity-75">
													Remixed with 1Browser
												</span>
											</div>
										</m.div>
									</div>
									<div className="bg-[#242f3d] p-4 rounded-b-lg flex items-center">
										<input
											type="text"
											placeholder="Type a message..."
											className="flex-grow bg-[#17212b] text-white p-2 rounded-l-full focus:outline-none"
										/>
										<button className="bg-[#5cabdb] text-white p-2 rounded-r-full">
											<IconSend size={20} />
										</button>
									</div>
								</div>
							</m.div>
						)}
					</AnimatePresence>

					{stage === 1 && (
						<m.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							className="absolute"
							style={{
								top: cursorPosition.y + 20,
								left: cursorPosition.x + 20,
							}}
						>
							<div className="bg-gray-700 rounded-lg shadow-lg p-2">
								<button
									ref={remixButtonRef}
									className={cn(
										"flex items-center space-x-2 text-white hover:bg-gray-600 px-3 py-1 rounded",
										isClicking ? "animate-pulse bg-gray-600" : ""
									)}
								>
									<IconWand size={16} />
									<span>Remix</span>
								</button>
							</div>
						</m.div>
					)}

					{stage === 5 && (
						<m.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4"
						>
							{shareOptions.map((option, index) => (
								<m.button
									key={option.name}
									ref={option.name === "Telegram" ? telegramButtonRef : null}
									className={cn(
										`${option.color} text-white p-3 rounded-full shadow-lg hover:opacity-80 transition-opacity`,
										isClicking && option.name === "Telegram"
											? "animate-pulse opacity-50"
											: ""
									)}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
								>
									<option.icon size={24} />
								</m.button>
							))}
						</m.div>
					)}
				</div>
			}
		/>
	);
}
