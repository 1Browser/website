import { Logo } from "../logo";
import { NeonGradientCard } from "../magicui/neon-gradient-card";

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

				<NeonGradientCard className="flex flex-col mx-auto max-w-sm items-center justify-center text-center my-10">
					<div className="flex flex-col justify-center items-center gap-5 my-5">
						<Logo size={200} />
						<span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold tracking-tighter text-transparent drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
							1Browser is{" "}
							<span className="underline decoration-wavy">enough</span>.
						</span>
					</div>
				</NeonGradientCard>
			</div>

			<div className="h-[1px] w-full bg-gradient-to-r from-primary to-accent my-[5rem]" />
		</div>
	);
}
