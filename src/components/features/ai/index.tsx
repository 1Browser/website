import { FeatureTitle } from "../basic/title";
import { BentoCard } from "../basic/card";
import { FeatureAiSummaryDemo } from "./summary-demo";
import { ZenModeDemo } from "./zen-mode-demo";
import { DecentralizedComputingDemo } from "./decentralized-computing-demo";
import { AiAgentsDemo } from "./ai-agents-demo";

export function FeatureAi() {
	return (
		<div className="mx-auto max-w-[1440px] px-4 mt-20">
			<FeatureTitle title="AI is There, with You" />

			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title="Reading = Absorbing"
						description="Content is summarized, and mind maps are visually presented. You can interactively query any information on the web, all powered by AI."
						demo={<FeatureAiSummaryDemo />}
					/>
				</div>

				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title="Zen Mode"
						description="Ambitious. Beautiful. Minimal. Zen Mode is a new way to experience the internet. Browsing was boring before. It will be fun and efficient again."
						demo={<ZenModeDemo />}
					/>
				</div>

				<div className="flex flex-col md:flex-row gap-4">
					<BentoCard
						title="AI Agents"
						description="Scrape the internet, analyze the data, and even create content for you. Not just meeting your expectations, but anticipating them.
												Interacting with the internet was never been this effortless."
						demo={<AiAgentsDemo />}
					/>
					<BentoCard
						title="Decentralized Computing"
						description="AI doesn’t mean compromising on privacy.
We leverage distributed computing power to support our AI models. You can even share your own computing power with others—creating a true win-win situation."
						demo={<DecentralizedComputingDemo />}
					/>
				</div>
			</div>
		</div>
	);
}
