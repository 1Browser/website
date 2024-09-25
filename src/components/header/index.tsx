"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
	return (
		<header className="sticky top-0 z-50 bg-opacity-30 backdrop-filter backdrop-blur-lg bg-white/30 text-foreground">
			<div className="container mx-auto px-4 py-3">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="flex items-center gap-2 hover:opacity-80 transition-opacity"
					>
						<Image
							src="/logo.svg"
							alt="1Browser logo"
							width={40}
							height={40}
							className="rounded-full bg-white p-1"
						/>
						<span className="text-2xl font-bold">1Browser</span>
					</Link>

					<nav>
						<ul className="flex items-center gap-6">
							<li>
								<Link href="/features" className="hover:underline">
									Features
								</Link>
							</li>
							<li>
								<Link href="/pricing" className="hover:underline">
									Pricing
								</Link>
							</li>
							<li>
								<Link href="/about" className="hover:underline">
									About
								</Link>
							</li>
							<li>
								<Link href="/contact" className="hover:underline">
									Contact
								</Link>
							</li>
						</ul>
					</nav>

					<Button>Join Waitlist</Button>
				</div>
			</div>
		</header>
	);
}
