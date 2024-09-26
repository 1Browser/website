import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function Scroller() {
	return (
		<div className="my-[200px]">
			<VelocityScroll
				text="Make Internet Great Again"
				default_velocity={5}
				className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm text-foreground md:text-7xl md:leading-[5rem]"
			/>
		</div>
	);
}
