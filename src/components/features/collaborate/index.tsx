import { FeatureTitle } from "../basic/title";
import { BentoCard } from "../basic/card";
import { AnnotationDemo } from "./annotation-demo";
import { InternetOfThoughtsDemo } from "./internet-of-thoughts-demo";

export function FeatureCollaborate() {
	return (
		<div className="mx-auto max-w-[1440px] px-4 mt-20">
			<FeatureTitle title="Collaborate with Yourself and Others" />

			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title="Highlight and Annotate"
						description="Highlight and annotate the text on the page. Come back and review the annotations later. It's like having an accessible notebook for the internet. You can also collaborate with others. Imagine an internet of thoughts, free speech, and ideas."
						demo={<AnnotationDemo />}
					/>
				</div>

				<div className="flex flex-col md:flex-row gap-4">
					<BentoCard
						title="Internet of Thoughts"
						description="Not only an article, you can also annotate any web page, any pdf, any audio, even video. The internet is your canvas, everyone's canvas."
						demo={<InternetOfThoughtsDemo />}
					/>
				</div>
			</div>
		</div>
	);
}
