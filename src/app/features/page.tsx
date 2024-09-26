import { Metadata } from "next";
import { Features } from "@/components/features";

export const metadata: Metadata = {
	title: "1Browser Features - AI-Powered Browsing and More",
	description:
		"Discover the innovative features of 1Browser, including AI-powered browsing, second brain functionality, and seamless collaboration tools.",
};

export default function FeaturesPage() {
	return <Features />;
}
