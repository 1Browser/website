import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Scroller } from "@/components/scoller";
import { TrustedBy } from "@/components/trusted-by";
import { Pricing } from "@/components/pricing";
import { Video } from "@/components/video";

export default function Home() {
	return (
		<div>
			<Hero />
			<Video />
			<Manifesto />
			<Features />
			<Scroller />
			<TrustedBy />
			<Pricing />
		</div>
	);
}
