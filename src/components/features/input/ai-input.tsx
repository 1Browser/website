"use client";

import { toast } from "@/hooks/use-toast";
import { IconSend } from "@tabler/icons-react";
import React, { useState } from "react";

interface AIInputProps {
	onSubmit?: (query: string) => void;
}

export const AIInput: React.FC<AIInputProps> = ({ onSubmit }) => {
	const [query, setQuery] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (query.trim()) {
			onSubmit?.(query);
			setQuery("");
			toast({
				title: "AI is working",
				description: "It will take a few centuries to get the answer.",
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
			<div className="relative flex items-center">
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Ask AI anything..."
					className="w-full px-6 py-4 text-lg bg-gray-800 border-2 border-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 ease-in-out"
				/>
				<button
					type="submit"
					className="absolute right-2 p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 ease-in-out"
				>
					<IconSend className="w-6 h-6 text-white" />
				</button>
			</div>
		</form>
	);
};
