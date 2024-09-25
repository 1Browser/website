import React from "react";

export function OldBrowserFrame({
	defaultUrl = "https://example.com",
	content,
}: {
	defaultUrl: string;
	content: React.ReactNode;
}) {
	return (
		<div className="w-full h-full bg-gray-200 border-2 border-gray-400 rounded overflow-hidden">
			{/* Browser toolbar */}
			<div className="h-8 bg-gray-300 flex items-center px-2 space-x-2 border-b border-gray-400">
				<div className="flex space-x-1">
					<button className="w-4 h-4 bg-gray-400 border border-gray-500 rounded text-xs font-bold text-gray-600">
						x
					</button>
					<button className="w-4 h-4 bg-gray-400 border border-gray-500 rounded text-xs font-bold text-gray-600">
						-
					</button>
					<button className="w-4 h-4 bg-gray-400 border border-gray-500 rounded text-xs font-bold text-gray-600">
						□
					</button>
				</div>
				<div className="flex-grow">
					<div className="w-full max-w-2xl mx-auto">
						<input
							type="text"
							className="w-full bg-white text-gray-800 border border-gray-400 px-2 py-0.5 text-xs focus:outline-none"
							value={defaultUrl}
							disabled
						/>
					</div>
				</div>
			</div>

			{/* Browser content */}
			<div className="h-[calc(100%-2rem)] overflow-auto bg-white">
				{content}
			</div>
		</div>
	);
}
