import { Metadata } from "next";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Scroller } from "@/components/scoller";
import { TrustedBy } from "@/components/trusted-by";
import { Pricing } from "@/components/pricing";
import { Video } from "@/components/video";

export const metadata: Metadata = {
	title: "1Browser - Your All in One Browser",
	description:
		"Experience the future of intelligent and open information consumption with 1Browser. Featuring AI-powered browsing, a powerful second brain, and seamless collaboration tools.",
};

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
