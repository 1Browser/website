"use client";

import React, { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AnimatePresence, m } from "framer-motion";

export function BrowserFrame({
	defaultUrl = "https://example.com",
	content,
	sidePanelWidth,
	sidePanel,
	enableDidCard,
}: {
	defaultUrl: string;
	content: React.ReactNode;
	sidePanel?: React.ReactNode;
	sidePanelWidth?: number;
	enableDidCard?: boolean;
}) {
	const [isDidCardOpen, setIsDidCardOpen] = useState(false);
	const browserFrameRef = useRef<HTMLDivElement>(null);
	const didCardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!enableDidCard || !browserFrameRef.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsDidCardOpen(true);
				} else {
					setIsDidCardOpen(false);
				}
			},
			{
				threshold: 1, // 100% of the component is visible
			}
		);

		observer.observe(browserFrameRef.current);

		return () => {
			if (browserFrameRef.current) {
				observer.unobserve(browserFrameRef.current);
			}
		};
	}, [enableDidCard]);

	return (
		<div
			ref={browserFrameRef}
			className="relative w-full h-full bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
		>
			{/* Browser toolbar */}
			<div className="h-12 bg-gray-800 flex items-center px-4 space-x-2">
				<div className="flex space-x-2">
					<div className="w-3 h-3 rounded-full bg-red-500"></div>
					<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
					<div className="w-3 h-3 rounded-full bg-green-500"></div>
				</div>
				<div className="flex-grow">
					<div className="relative w-full max-w-2xl mx-auto">
						<input
							type="text"
							className="w-full bg-gray-700 text-gray-200 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={defaultUrl}
							disabled
						/>
						{enableDidCard && (
							<>
								<button
									className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
									onClick={() => setIsDidCardOpen(!isDidCardOpen)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
								<AnimatePresence>
									{isDidCardOpen && (
										<m.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 10 }}
											transition={{ duration: 0.3 }}
											ref={didCardRef}
											className="absolute right-0 mt-2 w-80 z-10"
										>
											<DidCard />
										</m.div>
									)}
								</AnimatePresence>
							</>
						)}
					</div>
				</div>
			</div>

			{/* Browser content */}
			<div className="flex h-[calc(100%-3rem)] relative">
				{content}
				{sidePanel && (
					<div
						className="bg-gray-800 border-l border-gray-700 overflow-auto min-w-[200px]"
						style={{ width: sidePanelWidth }}
					>
						{sidePanel}
					</div>
				)}
			</div>
		</div>
	);
}

function DidCard() {
	return (
		<div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
			<h3 className="text-xl font-bold mb-4 text-blue-400">Web3 Identity</h3>
			<div className="flex items-center mb-6">
				<img
					src="https://song.work/avatar.webp"
					alt="Owner Avatar"
					className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400"
				/>
				<div>
					<h4 className="text-lg font-semibold">Songkeys</h4>
					<p className="text-sm text-blue-300">Full-stack Developer</p>
				</div>
			</div>
			<Separator className="my-4 bg-gray-700" />
			<div className="space-y-4">
				<div>
					<h5 className="text-sm font-semibold text-blue-400 mb-1">DID:</h5>
					<p className="text-sm text-gray-300 break-all bg-gray-800 p-2 rounded">
						did:songkeys:0x1234...5678
					</p>
				</div>
				<div>
					<h5 className="text-sm font-semibold text-blue-400 mb-1">
						Ethereum Address:
					</h5>
					<p className="text-sm text-gray-300 break-all bg-gray-800 p-2 rounded">
						0x1234...5678
					</p>
				</div>
			</div>
			<Separator className="my-4 bg-gray-700" />
			<div>
				<h5 className="text-sm font-semibold text-blue-400 mb-2">
					Verified Credentials:
				</h5>
				<div className="flex flex-wrap gap-2">
					<Badge variant="secondary">GitHub</Badge>
					<Badge variant="secondary">Twitter</Badge>
					<Badge variant="secondary">LinkedIn</Badge>
				</div>
			</div>
			<Separator className="my-4 bg-gray-700" />
			<div>
				<h5 className="text-sm font-semibold text-blue-400 mb-2">Skills:</h5>
				<div className="flex flex-wrap gap-2">
					<Badge>React</Badge>
					<Badge>Node.js</Badge>
					<Badge>Web3</Badge>
				</div>
			</div>
			<Separator className="my-4 bg-gray-700" />
			<div className="mt-6">
				<Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
					Sponsor Songkeys
				</Button>
			</div>
		</div>
	);
}
