import { Logo } from "../logo";

export function Manifesto() {
	return (
		<div className="max-w-3xl mx-auto my-5">
			<div className="h-[1px] w-full bg-gradient-to-r from-primary to-accent my-[5rem]" />

			<h2 className="uppercase text-center text-[1.5rem] underline my-5">
				Manifesto
			</h2>
			<div className="text-[2rem] flex flex-col gap-5">
				<p>
					<span className="font-bold text-[4rem] italic">In</span> a world where
					our digital lives are fragmented and exploited, 1Browser stands as a
					beacon of freedom.
				</p>
				<p>
					We've been captives in our own digital realm – bound by algorithms,
					tracked by corporations, and scattered across platforms.
				</p>
				<p>No more.</p>
				<p>
					1Browser is your digital sanctuary. It's where your online experience
					is truly yours. Where your thoughts are protected, your discoveries
					are personal, and your browsing is liberated.
				</p>
				<p>Reclaim your digital self. Welcome to 1Browser.</p>

				<div className="flex justify-center mt-10">
					<Logo size={200} />
				</div>

				<p className="text-[3rem] font-bold text-center italic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse mt-10">
					1Browser is <span className="underline decoration-wavy">enough</span>.
				</p>
			</div>

			<div className="h-[1px] w-full bg-gradient-to-r from-primary to-accent my-[5rem]" />
		</div>
	);
}
