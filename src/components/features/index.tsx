import { FeatureAi } from "./ai";
import { FeatureCollaborate } from "./collaborate";
import { FeatureBrain } from "./brain";
import { FeatureOpenInformation } from "./open-information";
export function Features() {
	return (
		<div>
			<FeatureAi />
			<FeatureCollaborate />
			<FeatureBrain />
			<FeatureOpenInformation />
		</div>
	);
}
