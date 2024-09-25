import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import Background from "@/components/background";
import { Toaster } from "@/components/ui/toaster";

const sans = localFont({
	src: [
		{
			path: "./fonts/charter_regular.woff2",
			style: "normal",
			weight: "400",
		},
		{
			path: "./fonts/charter_bold.woff2",
			style: "normal",
			weight: "600",
		},
		{
			path: "./fonts/charter_italic.woff2",
			style: "italic",
			weight: "400",
		},
		{
			path: "./fonts/charter_bold_italic.woff2",
			style: "italic",
			weight: "600",
		},
	],
	variable: "--font-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "1Browser",
	description: "Your All in 1Browser",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${sans.variable} antialiased`}>
				<Providers>
					<Background />
					<Header />
					<main className="mx-auto">{children}</main>
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
