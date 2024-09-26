import React, { useState } from "react";
import {
	ReactFlow,
	Background,
	Controls,
	Node,
	Edge,
	BackgroundVariant,
} from "@xyflow/react";

const generateNodes = (): Node[] => {
	return Array.from({ length: 10 }, (_, i) => ({
		id: `${i + 1}`,
		position: { x: Math.random() * 500, y: Math.random() * 500 },
		data: { label: `Trend ${i + 1}` },
		style: {
			background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
				Math.random() * 255
			}, 0.5)`,
			color: "white",
			border: "none",
			borderRadius: "50%",
			width: 100,
			height: 100,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			fontSize: "12px",
		},
	}));
};

const userContent = [
	{
		id: 1,
		content:
			"1Browser is a new browser that is built on the open web. It's really cool. Recommend. 10/10",
	},
	{
		id: 2,
		content:
			"The AI features really helps me to be more productive. I love it.",
	},
	{
		id: 3,
		content:
			"I believe Privacy-conscious users will really appreciate 1Browser's built-in security features and transparent data practices.",
	},
	{
		id: 4,
		content:
			"1Browser's seamless tab management has significantly reduced digital clutter for our users.",
	},
	{
		id: 5,
		content:
			"The AI-powered content suggestions in 1Browser have revolutionized how users discover new information.",
	},
	{
		id: 6,
		content:
			"The integration of AI writing assistance in 1Browser has boosted user productivity in composing emails and documents.",
	},
	{
		id: 7,
		content:
			"1Browser's voice search capability has made web navigation more accessible and convenient for all users.",
	},
	{
		id: 8,
		content:
			"The customizable AI dashboard in 1Browser allows users to tailor their browsing experience to their specific needs.",
	},
	{
		id: 9,
		content:
			"1Browser's AI-driven ad blocker has significantly improved page load times and overall browsing experience.",
	},
	{
		id: 10,
		content:
			"Users report that 1Browser's AI-powered language translation feature has made international browsing seamless.",
	},
];

const generateEdges = (nodes: Node[]): Edge[] => {
	return nodes.slice(1).map((node, index) => ({
		id: `e${index + 1}-${index + 2}`,
		source: `${index + 1}`,
		target: `${index + 2}`,
		style: { stroke: "rgba(255, 255, 255, 0.2)" },
	}));
};

export function WebXDemoZen() {
	const [nodes, setNodes] = useState<Node[]>(generateNodes());
	const [edges, setEdges] = useState<Edge[]>(generateEdges(nodes));

	const regenerateTrends = () => {
		const newNodes = generateNodes();
		setNodes(newNodes);
		setEdges(generateEdges(newNodes));
	};

	return (
		<div className="h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans overflow-hidden">
			<header className="p-6 flex justify-between items-center">
				<h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
					1Browser AI Hub
				</h1>
				<button
					onClick={regenerateTrends}
					className="px-4 py-2 bg-purple-600 rounded-full text-sm hover:bg-purple-700 transition-colors"
				>
					Regenerate Trends
				</button>
			</header>

			<main className="flex h-[calc(100vh-88px)]">
				<section className="w-2/3 p-6 space-y-6">
					<div className="bg-gray-800 bg-opacity-50 p-6 rounded-2xl backdrop-blur-lg">
						<h2 className="text-2xl font-bold mb-4 flex items-center">
							<span className="mr-2">🤖</span> AI Insight of the Moment
						</h2>
						<p className="text-lg">
							1Browser&apos;s AI has detected a surge in user productivity. Web
							browsing efficiency has increased by 42% among 1Browser users,
							with seamless tab management and AI-powered content suggestions
							leading the charge.
						</p>
					</div>

					<div className="grid grid-cols-3 gap-6">
						{userContent.map((friend) => (
							<div
								key={friend.id}
								className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-0.5 group hover:from-cyan-400 hover:to-pink-600 transition-all duration-300"
							>
								<div className="bg-gray-800 bg-opacity-50 h-full rounded-2xl p-4 backdrop-blur-sm">
									<p className="font-bold my-2">
										1Browser Enthusiast {friend.id}
									</p>
									<p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity my-2">
										{friend.content}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				<aside className="w-1/3 p-6">
					<h2 className="text-2xl font-bold mb-4 flex items-center">
						<span className="mr-2">🌐</span> 1Browser Trend Nexus
					</h2>
					<div className="h-[calc(100vh-180px)] rounded-2xl overflow-hidden border border-purple-500 shadow-lg shadow-purple-500/20">
						<ReactFlow
							nodes={nodes}
							edges={edges}
							fitView
							className="bg-gray-900"
							zoomOnScroll={false}
							panOnScroll={false}
							panOnDrag={false}
						>
							<Background color="#6366f1" variant={BackgroundVariant.Dots} />
							<Controls className="bg-gray-800 text-white" />
						</ReactFlow>
					</div>
				</aside>
			</main>
		</div>
	);
}
