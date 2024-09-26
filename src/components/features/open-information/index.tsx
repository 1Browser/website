import { FeatureTitle } from "../basic/title";
import { BentoCard } from "../basic/card";
import { SteganographyDemo } from "./steganography-demo";
import { Web3EnhancementDemo } from "./web3-enhancement-demo";
import { DIDDemo } from "./did-demo";
import { SponsorDemo } from "./sponsor-demo";
import { RemixDemo } from "./remix-demo";
import HyperText from "@/components/magicui/hyper-text";

export function FeatureOpenInformation() {
	return (
		<div className="mx-auto max-w-[1440px] px-4 mt-20">
			<FeatureTitle title="Embrace Open Information" />

			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title={<HyperText text="Steganography - Anti-Censorship" />}
						description="Censorship is bullsh*t. Here is the built-in steganography to hide information in plain sight. No more worrying about censorship. Share information openly."
						demo={<SteganographyDemo />}
					/>
					<BentoCard
						title="Web3 Enhancement"
						description="Web3 is the future. But it is not there yet. We have built-in Web3 enchancement to make your Web3 experience smoother. For example, automatically show hex address info (with this owner's profile), etc. Data powered by RSS3."
						demo={<Web3EnhancementDemo />}
					/>
				</div>
				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title="Decentralized Identities of Ownership"
						description="Show ownership of the website. Show your identity to the viewer and get rewarded by them for your contribution to the Internet of open information."
						demo={<DIDDemo />}
					/>
					<BentoCard
						title="$POWER Token Sponsorship"
						description="Show your support for open information by sponsoring $POWER token. Gain visibility and get rewarded by the community."
						demo={<SponsorDemo />}
					/>
				</div>
				<div className="flex flex-col gap-4 md:flex-row">
					<BentoCard
						title="Remix and Share on Any Platform"
						description='See a good resources on the Internet? "Remix" it and publish on any platform with one click. This is the future of information sharing. Effortlessly remix with the help of your Second Brain and 1Browser AI.'
						demo={<RemixDemo />}
					/>
				</div>
			</div>
		</div>
	);
}
