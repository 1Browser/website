"use client";

import React from "react";
import {
	ReactFlow,
	Background,
	Node,
	Edge,
	BackgroundVariant,
	EdgeTypes,
	getBezierPath,
} from "@xyflow/react";

const nodeStyles = {
	base: "text-white rounded-lg p-3 shadow-lg transition-all duration-300 hover:scale-105",
	browser: "bg-purple-600 hover:bg-purple-500",
	userDevice: "bg-green-600 hover:bg-green-500",
	network: "bg-yellow-600 hover:bg-yellow-500",
	aiNode: "bg-blue-600 hover:bg-blue-500",
};

const initialNodes: Node[] = [
	{
		id: "1",
		position: { x: 250, y: 0 },
		data: { label: "1Browser" },
		className: `${nodeStyles.base} ${nodeStyles.browser}`,
	},
	{
		id: "2",
		position: { x: 100, y: 100 },
		data: { label: "User Device 1" },
		className: `${nodeStyles.base} ${nodeStyles.userDevice}`,
	},
	{
		id: "3",
		position: { x: 400, y: 100 },
		data: { label: "User Device 2" },
		className: `${nodeStyles.base} ${nodeStyles.userDevice}`,
	},
	{
		id: "4",
		position: { x: 250, y: 200 },
		data: { label: "Decentralized AI Network" },
		className: `${nodeStyles.base} ${nodeStyles.network} w-48 text-center`,
	},
	{
		id: "5",
		position: { x: 100, y: 300 },
		data: { label: "AI Node 1" },
		className: `${nodeStyles.base} ${nodeStyles.aiNode}`,
	},
	{
		id: "6",
		position: { x: 250, y: 300 },
		data: { label: "AI Node 2" },
		className: `${nodeStyles.base} ${nodeStyles.aiNode}`,
	},
	{
		id: "7",
		position: { x: 400, y: 300 },
		data: { label: "AI Node 3" },
		className: `${nodeStyles.base} ${nodeStyles.aiNode}`,
	},
];

const edgeStyles = {
	base: "stroke-2 stroke-opacity-50",
	browser: "stroke-purple-400",
	userDevice: "stroke-green-400",
	network: "stroke-yellow-400",
	aiNode: "stroke-blue-400",
};

const initialEdges: Edge[] = [
	{
		id: "e1-2",
		source: "1",
		target: "2",
		type: "custom",
		animated: true,
		data: { className: `${edgeStyles.base} ${edgeStyles.browser}` },
	},
	{
		id: "e1-3",
		source: "1",
		target: "3",
		type: "custom",
		animated: true,
		data: { className: `${edgeStyles.base} ${edgeStyles.browser}` },
	},
	{
		id: "e2-4",
		source: "2",
		target: "4",
		type: "custom",
		animated: true,
		data: { className: `${edgeStyles.base} ${edgeStyles.userDevice}` },
	},
	{
		id: "e3-4",
		source: "3",
		target: "4",
		type: "custom",
		animated: true,
		data: { className: `${edgeStyles.base} ${edgeStyles.userDevice}` },
	},
	{
		id: "e4-5",
		source: "4",
		target: "5",
		type: "custom",
		animated: true,
		data: { className: `${edgeStyles.base} ${edgeStyles.network}` },
	},
	{
		id: "e4-6",
		source: "4",
		target: "6",
		type: "custom",
		animated: true,
		data: { className: `${edgeStyles.base} ${edgeStyles.network}` },
	},
	{
		id: "e4-7",
		source: "4",
		target: "7",
		type: "custom",
		animated: true,
		data: { className: `${edgeStyles.base} ${edgeStyles.network}` },
	},
];

const CustomEdge = ({
	sourceX,
	sourceY,
	targetX,
	targetY,
	sourcePosition,
	targetPosition,
	style = {},
	data,
	markerEnd,
}: any) => {
	const [edgePath] = getBezierPath({
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition,
	});

	return (
		<path
			d={edgePath}
			fill="none"
			className={`${data.className} animate-pulse`}
			markerEnd={markerEnd}
		/>
	);
};

const edgeTypes: EdgeTypes = {
	custom: CustomEdge,
};

export function DecentralizedComputingDemo() {
	return (
		<div className="w-full h-[400px] bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
			<ReactFlow
				nodes={initialNodes}
				edges={initialEdges}
				edgeTypes={edgeTypes}
				fitView
				className="bg-gradient-to-br from-gray-900 to-gray-800 pointer-events-none"
				panOnScroll={false}
				panOnDrag={false}
				zoomOnScroll={false}
			>
				<Background
					color="#4F46E5"
					variant={BackgroundVariant.Dots}
					gap={20}
					size={1}
				/>
			</ReactFlow>
		</div>
	);
}
