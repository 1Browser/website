"use client";

import { cn } from "@/lib/utils";
import { m } from "framer-motion";

export function BentoCard({
	title,
	description,
	demo,
	className = "",
}: {
	title: string;
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
			<div className="p-6">
				{demo && <div className="mb-4">{demo}</div>}
				<h3 className="text-4xl font-semibold text-foreground mb-2">{title}</h3>
				<p className="text-secondary-foreground">{description}</p>
			</div>
		</m.div>
	);
}
