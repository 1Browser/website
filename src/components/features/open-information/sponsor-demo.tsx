import OrbitingCircles from "@/components/magicui/orbiting-circles";
import {
	IconBrandFacebook,
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandMedium,
	IconBrandReddit,
	IconBrandTiktok,
	IconBrandTwitch,
	IconBrandTwitter,
	IconBrandWeibo,
} from "@tabler/icons-react";
import { PowerIcon } from "./power-icon";

export function SponsorDemo() {
	return (
		<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
			<span className="pointer-events-none text-center text-8xl font-semibold leading-none text-orange-500">
				<PowerIcon size={100} />
			</span>

			{/* Inner Circles */}
			<OrbitingCircles
				className="size-[30px] border-none bg-transparent"
				duration={20}
				delay={5}
				radius={80}
			>
				<IconBrandGithub />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[30px] border-none bg-transparent"
				duration={20}
				delay={10}
				radius={80}
			>
				<IconBrandTwitch />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[30px] border-none bg-transparent"
				duration={20}
				delay={15}
				radius={80}
			>
				<IconBrandTwitter />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[30px] border-none bg-transparent"
				duration={20}
				delay={20}
				radius={80}
			>
				<IconBrandReddit />
			</OrbitingCircles>

			{/* Outer Circles (reverse) */}
			<OrbitingCircles
				className="size-[50px] border-none bg-transparent"
				radius={190}
				duration={20}
				delay={4}
				reverse
			>
				<IconBrandInstagram />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[50px] border-none bg-transparent"
				radius={190}
				duration={20}
				delay={8}
				reverse
			>
				<IconBrandFacebook />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[50px] border-none bg-transparent"
				radius={190}
				duration={20}
				delay={12}
				reverse
			>
				<IconBrandTiktok />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[50px] border-none bg-transparent"
				radius={190}
				duration={20}
				delay={16}
				reverse
			>
				<IconBrandWeibo />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[50px] border-none bg-transparent"
				radius={190}
				duration={20}
				delay={20}
				reverse
			>
				<IconBrandMedium />
			</OrbitingCircles>
		</div>
	);
}
