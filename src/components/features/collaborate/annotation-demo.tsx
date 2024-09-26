"use client";
import { BrowserFrame } from "@/components/browser-frame";
import { IconSend } from "@tabler/icons-react";
import { AnimatePresence, m } from "framer-motion";
import React, { useState } from "react";

export function AnnotationDemo() {
	return (
		<BrowserFrame
			defaultUrl="https://openinformation.io/"
			content={<AnnotationDemo_ />}
		/>
	);
}

function AnnotationDemo_() {
	const demoText = `Public information is information created with the intention of being free, and thus is to be disseminated without limit or constraint. Once brought into existence, its freedom becomes inherent. And by no way should any single entity determine its existence, flow, and interpretation. When we, digital livings, chose comfort and easiness over freedom, power was inadvertently handed to a small group of people waiting to exploit us. First, we started using apps and services that seemed to make life easier, but before we knew it, we found ourselves praying for our cyber overlords to do us no evil.

Information freedom does not naturally evolve, it degrades.

The way to resist digital slavery is not by sitting and wishing for another small group of super heroes to battle the super villains who were once the heroes themselves. As we the people have fought for equality, independence, and freedom of our physical land and body, each one of us needs to fight for the same for our digital world and being.

It’s not hard to join the fight. To begin with, when you want to post something like a blog or a picture, consider sharing it through a channel that you know is not controlled by a single party. It could be a blockchain, a decentralized network, or even a hosted website if you are looking for something more old-fashioned. And if posting on these platforms alone won’t achieve your goal as your friends and fans are kept within closed social graphs, post on both places so at least the copy on the open web is free to flow. And, if you happen to be someone with adequate technical skills, consider running some nodes and write some code to make open networks better - every action, no matter how small, fortifies our collective power.`;
	const highlightedText =
		"Public information is information created with the intention of being free";

	const [isOpen, setIsOpen] = useState(true);
	const [newComment, setNewComment] = useState("");
	const [discussions, setDiscussions] = useState([
		{
			user: "Alice",
			nickname: "OpenInfoAdvocate",
			comment: "This is so important for democracy!",
			timestamp: "2 hours ago",
		},
		{
			user: "Bob",
			nickname: "CuriousMind42",
			comment: "I agree. How can we ensure this in practice?",
			timestamp: "1 hour ago",
		},
		{
			user: "Charlie",
			nickname: "PolicyWonk",
			comment: "We need better policies to protect public information.",
			timestamp: "30 minutes ago",
		},
	]);
	const annotationCount = discussions.length;

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	const handleSubmitComment = (e: React.FormEvent) => {
		e.preventDefault();
		if (newComment.trim()) {
			const newDiscussion = {
				user: "You",
				nickname: "Anonymous",
				comment: newComment,
				timestamp: "Just now",
			};
			setDiscussions([newDiscussion, ...discussions]);
			setNewComment("");
		}
	};

	return (
		<div className="container mx-auto px-4 py-8 bg-gray-900 text-foreground">
			<h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
				Open Information
			</h2>

			<div className="relative mb-8">
				<div className="text-lg leading-relaxed p-6 rounded-lg shadow-lg">
					{demoText.split(highlightedText).map((part, index) => (
						<React.Fragment key={index}>
							{part}
							{index === 0 && (
								<span className="relative group">
									<span
										className="bg-yellow-300 px-1 text-black group-hover:bg-yellow-400 group-hover:underline transition-all cursor-pointer"
										onClick={toggleOpen}
									>
										{highlightedText}
									</span>
									<span className="absolute -top-2 left-[100%] bg-violet-500 text-foreground text-xs px-2 py-1 rounded-full group-hover:bg-violet-600 group-hover:scale-105 transition-all">
										{annotationCount}
									</span>

									<AnimatePresence>
										{isOpen && (
											<m.div
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ opacity: 1, scale: 1 }}
												exit={{ opacity: 0, scale: 0.8 }}
												transition={{ duration: 0.2 }}
												className="absolute top-[-220%] left-[110%] w-96 p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-white/10 text-foreground opacity-95 group-hover:opacity-100 group-hover:scale-[1.01] transition-all"
											>
												<h3 className="text-xl font-semibold mb-4 text-foreground">
													Annotations
												</h3>
												<ul className="space-y-4 max-h-60 overflow-y-auto">
													<AnimatePresence>
														{discussions.map((discussion) => (
															<m.li
																initial={{ opacity: 0, scale: 0.8 }}
																animate={{ opacity: 1, scale: 1 }}
																exit={{ opacity: 0, scale: 0.8 }}
																transition={{ duration: 0.2 }}
																key={discussion.comment + discussion.timestamp}
																className="bg-gray-700 p-4 rounded-lg flex items-start space-x-3"
															>
																<img
																	src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${discussion.user}`}
																	alt={`${discussion.user}'s avatar`}
																	className="w-10 h-10 rounded-full"
																/>
																<div className="flex-1">
																	<div className="flex justify-between items-center mb-1">
																		<span className="font-bold text-blue-300">
																			{discussion.nickname}
																		</span>
																		<span className="text-xs text-gray-400">
																			{discussion.timestamp}
																		</span>
																	</div>
																	<p className="text-sm">
																		{discussion.comment}
																	</p>
																</div>
															</m.li>
														))}
													</AnimatePresence>
												</ul>
												{/* Add a comment input field */}
												<form
													onSubmit={handleSubmitComment}
													className="mt-4 relative"
												>
													<input
														type="text"
														placeholder="Add a comment"
														value={newComment}
														onChange={(e) => setNewComment(e.target.value)}
														className="w-full p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-foreground border border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 pl-4 pr-12"
													/>
													<button
														type="submit"
														className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
													>
														<IconSend className="w-5 h-5" />
													</button>
												</form>
											</m.div>
										)}
									</AnimatePresence>
								</span>
							)}
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
}
