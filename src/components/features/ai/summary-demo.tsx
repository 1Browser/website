"use client";

import { BrowserFrame } from "@/components/browser-frame";
import { ReactFlow } from "@xyflow/react";
import { OpenInformationWebpage } from "./open-info-webpage";
import { AIInput } from "../input/ai-input";
import { m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
	IconLoader2,
	IconBrain,
	IconWand,
	IconRobot,
	IconSparkles,
	IconChevronRight,
} from "@tabler/icons-react";

export function FeatureAiSummaryDemo() {
	const [stage, setStage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setStage((prevStage) => (prevStage + 1) % 4);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<BrowserFrame
			defaultUrl="https://openinformation.io/"
			content={
				<div className="overflow-auto h-[800px] relative">
					<OpenInformationWebpage />
				</div>
			}
			sidePanelWidth={500}
			sidePanel={
				<div className="h-[800px] p-6 text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-lg shadow-lg overflow-hidden relative">
					<div className="relative z-10 h-full flex flex-col">
						<div className="flex items-center">
							<h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center">
								1Browser AI
							</h2>
						</div>
						<AnimatePresence mode="wait">
							{stage === 0 && <InitialState key="initial" />}
							{stage === 1 && <AnalyzingState key="analyzing" />}
							{stage >= 2 && <SummaryState key="summary" />}
						</AnimatePresence>
						<div className="mt-auto">
							<AIInput />
						</div>
					</div>
				</div>
			}
		/>
	);
}

function InitialState() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex-1 flex items-center justify-center"
		>
			<div className="text-center p-8 bg-indigo-800 bg-opacity-30 rounded-lg">
				<IconBrain size={48} className="mx-auto mb-4 text-cyan-300" />
				<p className="text-lg mb-2">AI Analysis Ready</p>
				<p className="text-sm text-gray-300">
					Webpage content will be analyzed shortly
				</p>
			</div>
		</m.div>
	);
}

function AnalyzingState() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex-1 flex items-center justify-center"
		>
			<div className="flex flex-col items-center justify-center p-8 bg-indigo-800 bg-opacity-30 rounded-lg">
				<IconLoader2 className="w-16 h-16 text-blue-400 animate-spin mb-4" />
				<p className="text-lg font-semibold">Analyzing content...</p>
				<p className="text-sm text-gray-300 mt-2">Please wait</p>
			</div>
		</m.div>
	);
}

function SummaryState() {
	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
			className="flex-1 overflow-auto"
		>
			<div className="space-y-4">
				<SummarySection
					icon={IconSparkles}
					title="Key Points"
					items={[
						"Free internet advocacy",
						"Public information accessibility",
						"Decentralized platforms promotion",
					]}
				/>
				<SummarySection
					icon={IconWand}
					title="Initiatives"
					items={["Grants", "Physical house", "Podcast"]}
				/>
				<m.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					<h3 className="text-lg font-semibold mb-2 text-cyan-300 flex items-center">
						<IconBrain className="mr-2" /> Mind Map
					</h3>
					<MindMap />
				</m.div>
			</div>
		</m.div>
	);
}

function SummarySection({
	icon: Icon,
	title,
	items,
}: {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	items: string[];
}) {
	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
			className="bg-indigo-800 bg-opacity-30 p-4 rounded-lg"
		>
			<h3 className="text-lg font-semibold mb-2 text-cyan-300 flex items-center">
				<Icon className="mr-2" /> {title}
			</h3>
			<ul className="space-y-1">
				{items.map((item, index) => (
					<m.li
						key={index}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.1 * index }}
						className="flex items-center text-sm"
					>
						<IconChevronRight size={14} className="mr-2 text-purple-400" />
						{item}
					</m.li>
				))}
			</ul>
		</m.div>
	);
}

const initialNodes = [
	{
		id: "1",
		position: { x: 0, y: 0 },
		data: { label: "Open Information Initiative" },
	},
	{ id: "2", position: { x: -150, y: 100 }, data: { label: "Free Internet" } },
	{
		id: "3",
		position: { x: 0, y: 100 },
		data: { label: "Public Accessibility" },
	},
	{
		id: "4",
		position: { x: 150, y: 100 },
		data: { label: "Decentralized Platforms" },
	},
	{ id: "5", position: { x: -100, y: 200 }, data: { label: "Grants" } },
	{ id: "6", position: { x: 0, y: 200 }, data: { label: "Physical House" } },
	{ id: "7", position: { x: 100, y: 200 }, data: { label: "Podcast" } },
];

const initialEdges = [
	{ id: "1-2", source: "1", target: "2" },
	{ id: "1-3", source: "1", target: "3" },
	{ id: "1-4", source: "1", target: "4" },
	{ id: "1-5", source: "1", target: "5" },
	{ id: "1-6", source: "1", target: "6" },
	{ id: "1-7", source: "1", target: "7" },
];

function MindMap() {
	return (
		<div
			style={{ width: "100%", height: "300px" }}
			className="rounded-lg overflow-hidden"
		>
			<ReactFlow
				className="pointer-events-none"
				colorMode="dark"
				nodes={initialNodes}
				edges={initialEdges}
				fitView
				nodesDraggable={false}
				nodesConnectable={false}
				zoomOnScroll={false}
				panOnScroll={false}
			/>
		</div>
	);
}
