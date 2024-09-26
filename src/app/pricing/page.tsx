import { Metadata } from "next";
import { Pricing } from "@/components/pricing";

export const metadata: Metadata = {
	title: "1Browser Pricing - Choose Your Plan",
	description:
		"Find the perfect 1Browser plan for your needs. Explore our pricing options and start experiencing the future of web browsing today.",
};

export default function PricingPage() {
	return <Pricing />;
}
