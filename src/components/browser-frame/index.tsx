import React from "react";

export function BrowserFrame({
	defaultUrl = "https://example.com",
	content,
	sidePanel,
}: {
	defaultUrl: string;
	content: React.ReactNode;
	sidePanel?: React.ReactNode;
}) {
	return (
		<div className="w-full h-full bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
			{/* Browser toolbar */}
			<div className="h-12 bg-gray-800 flex items-center px-4 space-x-2">
				<div className="flex space-x-2">
					<div className="w-3 h-3 rounded-full bg-red-500"></div>
					<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
					<div className="w-3 h-3 rounded-full bg-green-500"></div>
				</div>
				<div className="flex-grow">
					<div className="w-full max-w-2xl mx-auto">
						<input
							type="text"
							className="w-full bg-gray-700 text-gray-200 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={defaultUrl}
							disabled
						/>
					</div>
				</div>
			</div>

			{/* Browser content */}
			<div className="flex h-[calc(100%-3rem)]">
				{content}
				{sidePanel && (
					<div className="bg-gray-800 border-l border-gray-700 overflow-auto min-w-[200px]">
						{sidePanel}
					</div>
				)}
			</div>
		</div>
	);
}
