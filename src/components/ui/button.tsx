import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { m } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-lg hover:shadow-primary/50 hover:scale-105",
				destructive:
					"bg-gradient-to-r from-destructive to-destructive-light text-destructive-foreground shadow-lg hover:shadow-destructive/50 hover:scale-105",
				outline:
					"border-2 border-primary bg-background shadow-lg hover:bg-primary-light/10 hover:text-primary hover:scale-105",
				secondary:
					"bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground shadow-lg hover:shadow-secondary/50 hover:scale-105",
				ghost: "hover:bg-primary-light/10 hover:text-primary hover:scale-105",
				link: "text-primary underline-offset-4 hover:underline hover:scale-105",
			},
			size: {
				default: "h-10 px-6 py-2",
				sm: "h-9 rounded-md px-4 text-xs",
				lg: "h-12 rounded-md px-8 text-lg",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : m.button;
		return (
			// @ts-ignore
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				whileTap={{ scale: 0.98 }}
				whileHover={{
					scale: 1.05,
					boxShadow: "0 0 15px rgba(var(--primary-rgb), 0.5)",
				}}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
