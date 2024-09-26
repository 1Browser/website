"use client";

import { BrowserFrame } from "@/components/browser-frame";
import {
	IconCoin,
	IconCurrencyEthereum,
	IconUser,
	IconExternalLink,
} from "@tabler/icons-react";
import { m } from "framer-motion";

const AddressInfo = ({
	type,
	position,
}: {
	type: "wallet" | "contract";
	position: "top" | "bottom";
}) => (
	<m.div
		initial={{ opacity: 0, y: position === "top" ? -10 : 10 }}
		animate={{ opacity: 1, y: 0 }}
		className={`absolute ${
			position === "top" ? "bottom-full mb-2" : "top-full mt-2"
		} left-0 bg-gray-800/20 hover:bg-gray-800/50 transition-all shadow-xl backdrop-blur-md text-white p-3 rounded-lg z-10 w-64`}
	>
		{type === "wallet" ? (
			<>
				<div className="flex items-center justify-between mb-2">
					<div className="flex items-center">
						<IconUser className="mr-2 text-blue-400" />
						<span className="font-semibold">vitalik.eth</span>
					</div>
					<IconExternalLink className="text-gray-400 cursor-pointer" />
				</div>
				<p className="text-sm mb-1">Balance: 1,234.56 ETH</p>
				<p className="text-sm">NFTs: 42</p>
				<div className="mt-2 text-xs text-gray-400">
					Last active: 2 hours ago
				</div>
			</>
		) : (
			<>
				<div className="flex items-center justify-between mb-2">
					<div className="flex items-center">
						<IconCoin className="mr-2 text-green-400" />
						<span className="font-semibold">WETH</span>
					</div>
					<IconExternalLink className="text-gray-400 cursor-pointer" />
				</div>
				<p className="text-sm mb-1">Type: ERC20 Token</p>
				<p className="text-sm mb-1">Total Supply: 1,000,000</p>
				<p className="text-sm">Verified: Yes</p>
				<div className="mt-2 text-xs text-gray-400">Created: 3 years ago</div>
			</>
		)}
	</m.div>
);

export function Web3EnhancementDemo() {
	return (
		<BrowserFrame
			defaultUrl="https://etherscan.io/tx/0x2969cd53a057400d926e16cc26ec1f8a651282a58021f78298c1da25b22ccca1"
			content={
				<div className="bg-gray-900 text-white p-6 min-h-[600px] w-full">
					<div className="mb-6 flex items-center justify-between">
						<div className="flex items-center">
							<IconCurrencyEthereum className="text-3xl mr-2 text-blue-400" />
							<h1 className="text-2xl font-bold">Etherscan</h1>
						</div>
						<div className="flex space-x-4">
							<input
								type="text"
								placeholder="Search transactions, addresses..."
								className="bg-gray-800 px-4 py-2 rounded w-64"
							/>
						</div>
					</div>
					<div className="text-gray-300">
						<h1 className="text-2xl font-bold mb-4">Transaction Details</h1>
						<div className="bg-gray-800 rounded-lg p-4 mb-4">
							<div className="grid grid-cols-3 gap-4">
								<div>
									<p className="text-gray-400 mb-1">Transaction Hash:</p>
									<p className="font-mono">0x2969...cca1</p>
								</div>
								<div>
									<p className="text-gray-400 mb-1">Status:</p>
									<p className="text-green-500">Success</p>
								</div>
								<div>
									<p className="text-gray-400 mb-1">Block:</p>
									<p>14,627,831</p>
								</div>
							</div>
						</div>
						<div className="bg-gray-800 rounded-lg p-4">
							<h2 className="text-xl font-semibold mb-3">More Details</h2>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-gray-400 mb-1">From:</p>
									<p className="relative">
										<span className="bg-blue-500 bg-opacity-20 px-1 py-0.5 rounded cursor-pointer">
											0x742d3...8f44e
										</span>
										<AddressInfo type="wallet" position="bottom" />
									</p>
								</div>
								<div>
									<p className="text-gray-400 mb-1">To:</p>
									<p className="relative">
										<span className="bg-blue-500 bg-opacity-20 px-1 py-0.5 rounded cursor-pointer">
											0x7a250...488D
										</span>
										<AddressInfo type="contract" position="top" />
									</p>
								</div>
								<div>
									<p className="text-gray-400 mb-1">Value:</p>
									<p>0.1 ETH</p>
								</div>
								<div>
									<p className="text-gray-400 mb-1">Transaction Fee:</p>
									<p>0.000105 ETH</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		/>
	);
}
