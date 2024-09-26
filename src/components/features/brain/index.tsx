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
						description='Clip and collect anything on the internet. Put them in your powerful "second brain".'
						demo={<CollectDemo />}
					/>
				</div>
				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title="Second Brain"
						description="A powerful second brain that helps you organize your life. No more messy notes, bookmarks, or drafts. Collect and leave. Forget something? Just ask."
						demo={<SecondBrainDemo />}
					/>
				</div>

				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title="Integrated with All Platforms"
						description="You can collect anything from anywhere and it will be saved to your second brain. Even without proactively collecting, everything you browse is saved to your second brain."
						demo={<CloudDemo />}
					/>
					<BentoCard
						title="Ask the Brain"
						description="Ask anything about your browsing or collecting history and the AI will answer you. So that's why it's called a second brain."
						demo={<AskAIDemo />}
					/>
				</div>
			</div>
		</div>
	);
}
