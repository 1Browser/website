import { Metadata } from "next";
import { Deck } from "@/components/deck";

export const metadata: Metadata = {
	title: "1Browser Deck - Our Vision and Mission",
	description:
		"Explore the 1Browser deck to learn about our vision, mission, and the revolutionary features that make 1Browser the future of web browsing.",
};

export default function DeckPage() {
	return <Deck />;
}
