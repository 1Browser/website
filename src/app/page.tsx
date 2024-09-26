import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Scroller } from "@/components/scoller";
import { TrustedBy } from "@/components/trusted-by";

export default function Home() {
	return (
		<div>
			<Hero />
			<Manifesto />
			<Features />
			<Scroller />
			<TrustedBy />
		</div>
	);
}
