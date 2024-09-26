"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-white/10 text-foreground">
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
							className="rounded-full"
						/>
						<span className="text-2xl font-bold">1Browser</span>
					</Link>

					{/* Hamburger menu for mobile */}
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? "✕" : "☰"}
					</button>

					{/* Navigation for desktop */}
					<nav className="hidden md:block">
						<ul className="flex items-center gap-6">
							<li>
								<Link href="/" className="hover:underline">
									Intro
								</Link>
							</li>
							<li>
								<Link href="/pricing" className="hover:underline">
									Pricing
								</Link>
							</li>
							<li>
								<Link href="/deck" className="hover:underline">
									Deck
								</Link>
							</li>
							<li>
								<Link href="/contact" className="hover:underline">
									Contact
								</Link>
							</li>
						</ul>
					</nav>

					{/* Button for desktop */}
					<Button className="hidden md:inline-flex">Join Waitlist</Button>
				</div>

				{/* Mobile menu */}
				{isMenuOpen && (
					<nav className="md:hidden mt-4">
						<ul className="flex flex-col gap-4">
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
								<Link href="/deck" className="hover:underline">
									Deck
								</Link>
							</li>
							<li>
								<Link href="/contact" className="hover:underline">
									Contact
								</Link>
							</li>
							<li>
								<Button className="w-full">Join Waitlist</Button>
							</li>
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
}
