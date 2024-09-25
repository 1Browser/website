import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
export default function Home() {
	return (
		<div>
			<Hero />
			<Manifesto />
			<Features />
		</div>
	);
}
