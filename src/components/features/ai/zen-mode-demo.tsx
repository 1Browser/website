"use client";

import { BrowserFrame } from "@/components/browser-frame";
import { OldBrowserFrame } from "@/components/browser-frame/old";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { WebXDemo } from "./web-x-demo";
import { WebXDemoZen } from "./web-x-demo-zen";

export function ZenModeDemo() {
	return (
		<>
			<style scoped>
				{`
  .slider {
    --default-handle-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
    --divider-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
		--divider-color: rgba(0, 0, 0, 0.5);
    --default-handle-color: rgba(0, 0, 0, 0.5);
		--default-handle-width: clamp(40px, 10vw, 200px);
  }
`}
			</style>
			<ImgComparisonSlider className="w-full slider group h-[600px]">
				<div slot="first">
					<OldBrowserFrame defaultUrl="https://x.com/" content={<WebXDemo />} />
				</div>
				<div slot="second">
					<BrowserFrame
						defaultUrl="https://x.com/?1browser-zen=true"
						content={<WebXDemoZen />}
					/>
				</div>
				<div slot="handle">
					<svg
						className="group-hover:scale-110 transition-all duration-300"
						xmlns="http://www.w3.org/2000/svg"
						width="100"
						viewBox="-8 -3 16 6"
					>
						<path
							stroke="#fff"
							d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
							strokeWidth="1"
							fill="#000"
							vectorEffect="non-scaling-stroke"
						></path>
					</svg>
				</div>
			</ImgComparisonSlider>
		</>
	);
}
