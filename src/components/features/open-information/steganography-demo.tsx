"use client";

import { BrowserFrame } from "@/components/browser-frame";
import { IconMessage, IconShare, IconThumbUp } from "@tabler/icons-react";
import { m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function SteganographyDemo() {
	return (
		<BrowserFrame
			defaultUrl="https://justanothersocialmedia.com/post/980109"
			content={<SteganographyDemoContent />}
		/>
	);
}

function SteganographyDemoContent() {
	const [revealed, setRevealed] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			setRevealed((prev) => !prev);
		}, 5000); // Toggle every 5 seconds

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="bg-gray-800 text-foreground p-4 font-sans">
			<Post />
			<div className="space-y-4 mt-4">
				<Comment
					author="Innocent Citizen"
					content="What is the truth? I am not sure anymore."
					avatar="https://api.dicebear.com/9.x/adventurer/svg?seed=Innocent%20Citizen"
					likes={15}
					time="2h ago"
				/>
				<Comment
					author="FreedomFighter"
					content={
						<AnimatePresence mode="popLayout">
							{revealed ? (
								<m.span
									key="revealed"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.5 }}
								>
									The truth cannot be silenced. We stand united.
								</m.span>
							) : (
								<EncryptedText />
							)}
						</AnimatePresence>
					}
					avatar="https://api.dicebear.com/9.x/adventurer/svg?seed=FreedomFighter"
					likes={42}
					time="1h ago"
				/>
				<Comment
					author="PeacefulObserver"
					content="Let's hope for a peaceful resolution."
					avatar="https://api.dicebear.com/9.x/adventurer/svg?seed=PeacefulObserver"
					likes={8}
					time="30m ago"
				/>
			</div>
		</div>
	);
}

function Post() {
	return (
		<div className="bg-gray-700 p-4 rounded-lg shadow-md">
			<div className="flex items-center mb-4">
				<img
					src="https://api.dicebear.com/9.x/adventurer/svg?seed=Global%20News%20Network"
					alt="News Outlet"
					className="w-10 h-10 rounded-full mr-3"
				/>
				<div>
					<h2 className="font-bold">Global News Network</h2>
					<p className="text-sm text-foreground">3h ago · Public</p>
				</div>
			</div>
			<h1 className="text-xl font-bold mb-2">
				Breaking: Significant Event Unfolds in Major City
			</h1>
			<p className="mb-4">
				Our reporters are on the ground covering this developing story. Stay
				tuned for updates.
			</p>
			<img
				src="/images/city-event.jpg"
				alt="City Event"
				className="w-full rounded-lg mb-4"
			/>
			<div className="flex justify-between text-foreground border-t pt-3">
				<button className="flex items-center">
					<IconThumbUp className="mr-2" /> 1.5K
				</button>
				<button className="flex items-center">
					<IconMessage className="mr-2" /> 342
				</button>
				<button className="flex items-center">
					<IconShare className="mr-2" /> Share
				</button>
			</div>
		</div>
	);
}

function EncryptedText() {
	const [text, setText] = useState("");

	useEffect(() => {
		const characters = "01!@#$%^&*()_+-=[]{}|;:,.<>?";
		let interval: NodeJS.Timeout;

		const generateText = () => {
			let newText = "";
			for (let i = 0; i < 40; i++) {
				newText += characters[Math.floor(Math.random() * characters.length)];
			}
			setText(newText);
		};

		interval = setInterval(generateText, 50);
		return () => clearInterval(interval);
	}, []);

	return (
		<m.span
			key="encrypted"
			className="font-mono text-green-600 inline-block w-full overflow-hidden"
		>
			{text}
		</m.span>
	);
}

function Comment({
	author,
	content,
	avatar,
	likes,
	time,
}: {
	author: string;
	content: React.ReactNode;
	avatar: string;
	likes: number;
	time: string;
}) {
	return (
		<div className="bg-gray-700 p-4 rounded-lg shadow">
			<div className="flex items-center mb-2">
				<img src={avatar} alt={author} className="w-8 h-8 rounded-full mr-2" />
				<div>
					<p className="font-bold text-foreground">{author}</p>
					<p className="text-xs text-foreground">{time}</p>
				</div>
			</div>
			<p className="mb-2">{content}</p>
			<div className="flex items-center text-sm text-foreground">
				<button className="flex items-center mr-4">
					<IconThumbUp className="mr-1" /> {likes}
				</button>
				<button>Reply</button>
			</div>
		</div>
	);
}
