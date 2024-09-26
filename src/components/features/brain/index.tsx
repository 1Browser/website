import { FeatureTitle } from "../basic/title";
import { BentoCard } from "../basic/card";
import { CollectDemo } from "./collect-demo";
import { SecondBrainDemo } from "./second-brain-demo";
import { CloudDemo } from "./cloud-demo";
import { AskAIDemo } from "./ask-ai-demo";

export function FeatureBrain() {
	return (
		<div className="mx-auto max-w-[1440px] px-4 mt-20">
			<FeatureTitle title="A Powerful Second Brain" />

			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title="Clip and Collect"
						description='Clip and collect anything on the internet. Store it in your powerful "second brain".'
						demo={<CollectDemo />}
					/>
				</div>
				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title="Second Brain"
						description="Your true brain extension that helps you organized. No more messy notes, bookmarks, or drafts. Forget something? Just ask."
						demo={<SecondBrainDemo />}
					/>
				</div>

				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title="Integrated with All Platforms"
						description="Collect freely without platform restrictions. Information flows seamlessly—just follow your intuition. Everything is in your second brain."
						demo={<CloudDemo />}
					/>
					<BentoCard
						title="Ask the Brain"
						description="Ask anything about your browsing or collecting history and the AI will answer you. So that's why it's called a real second brain."
						demo={<AskAIDemo />}
					/>
				</div>
			</div>
		</div>
	);
}
