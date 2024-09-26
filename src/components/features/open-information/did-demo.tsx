import { BrowserFrame } from "@/components/browser-frame";
import Image from "next/image";

export function DIDDemo() {
	return (
		<BrowserFrame
			defaultUrl="https://song.work"
			content={<SongProfile />}
			enableDidCard
		/>
	);
}

function SongProfile() {
	return (
		<div className="bg-gray-900 text-gray-100 w-full font-sans">
			<header className="bg-gradient-to-r from-purple-800 to-indigo-900 py-16">
				<div className="mx-auto px-4 flex items-center justify-between">
					<div>
						<h1 className="text-4xl font-bold mb-2">Song ZHANG</h1>
						<p className="text-xl text-purple-200">
							Fullstack & Web3 Software Engineer
						</p>
					</div>
					<img
						src="https://song.work/avatar.webp"
						alt="Song Zhang"
						width={150}
						height={150}
						className="rounded-full border-4 border-purple-400"
					/>
				</div>
			</header>

			<main className="mx-auto px-4 py-12">
				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-4 text-purple-400">
						About Me
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						<p className="mb-2">
							<span className="text-purple-400">Ethereum:</span> songkeys.eth
						</p>
						<p className="mb-2">
							<span className="text-purple-400">Discord:</span> Songkeys
						</p>
						<p className="mb-2">
							<span className="text-purple-400">Telegram:</span> @songkeys
						</p>
						<p className="mb-2">
							<span className="text-purple-400">Twitter:</span> @songkeys
						</p>
					</div>
				</section>
			</main>

			<footer className="bg-gray-800 py-6 text-center">
				<p className="text-gray-400">© 2023 Song Zhang. All rights reserved.</p>
			</footer>
		</div>
	);
}
