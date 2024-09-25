import { FeatureTitle } from "../basic/title";
import { BentoCard } from "../basic/card";
import { FeatureAiSummaryDemo } from "./summary-demo";
import { ZenModeDemo } from "./zen-mode-demo";
import { DecentralizedComputingDemo } from "./decentralized-computing-demo";
import { AiAgentsDemo } from "./ai-agents-demo";

export function FeatureAi() {
	return (
		<div className="mx-auto max-w-[1440px] px-4">
			<FeatureTitle title="AI is There, with You" />

			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title="Smart Summarization"
						description="AI lives in the browser sidebar. Always there. It beautifully summarizes the webpage and extracts the key points for you."
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
						description="Let AI Agents do the work for you. Scrape the internet, analyze the data, and even create content for you. Interacting with the internet was never this easy."
						demo={<AiAgentsDemo />}
					/>
					<BentoCard
						title="Decentralized Computing"
						description="No more cloud computing. Your data is yours. We don't even have a server. We use the power of the browser(s) to run our AI models. You are also sharing the computing power with other users. It's a win-win."
						demo={<DecentralizedComputingDemo />}
					/>
				</div>
			</div>
		</div>
	);
}
