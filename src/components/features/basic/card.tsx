"use client";

import { cn } from "@/lib/utils";
import { m } from "framer-motion";

export function BentoCard({
	title,
	description,
	demo,
	className = "",
}: {
	title: string | React.ReactNode;
	description: string;
	demo?: React.ReactNode;
	className?: string;
}) {
	return (
		<m.div
			whileHover={{
				scale: 1.02,
			}}
			className={cn(
				"w-full bg-background/30 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
				className
			)}
		>
			<div className="p-6 flex flex-col justify-between h-full">
				{demo && (
					<div className="mb-4 flex justify-center items-center">{demo}</div>
				)}
				<div>
					<div className="text-4xl font-semibold text-foreground mb-2">
						{title}
					</div>
					<p className="text-secondary-foreground">{description}</p>
				</div>
			</div>
		</m.div>
	);
}
