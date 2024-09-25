import { BrowserFrame } from "@/components/browser-frame";
import { ReactFlow } from "@xyflow/react";

export function FeatureAiSummaryDemo() {
	return (
		<BrowserFrame
			defaultUrl="https://openinformation.io/"
			content={
				<iframe
					src="https://openinformation.io/"
					className="flex-grow w-full h-[850px] border-none"
				/>
			}
			sidePanelWidth={500}
			sidePanel={
				<div className="p-6 text-white bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg shadow-lg">
					<div>
						<h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
							AI Summary
						</h2>
						<div className="space-y-4 text-gray-200">
							<p>
								The Open Information Initiative advocates for a free internet
								where information flows without control by major platforms.
							</p>
							<p>
								It promotes public accessibility of information and encourages
								use of decentralized platforms to empower the public good.
							</p>
							<p>
								The initiative supports its mission through grants, a physical
								house, and a podcast.
							</p>
						</div>

						<div className="mt-6">
							<h3 className="text-xl font-semibold mb-3 text-cyan-300">
								Mind map
							</h3>

							<p>Here is a mind map of the information we have just read.</p>

							<MindMap />
						</div>
					</div>
					<div className="mt-6">
						<AIInput />
					</div>
				</div>
			}
		/>
	);
}

import { AIInput } from "../input/ai-input";

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
