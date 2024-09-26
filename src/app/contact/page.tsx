import { Metadata } from "next";
import { Team } from "@/components/team";

export const metadata: Metadata = {
	title: "Contact 1Browser - Get in Touch",
	description:
		"Have questions or feedback about 1Browser? Get in touch with our team. We're here to help you make the most of your browsing experience.",
};

export default function ContactPage() {
	return <Team />;
}
