"use client";

import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
	"twitter",
	"facebook",
	"instagram",
	"linkedin",
	"youtube",
	"tiktok",
	"snapchat",
	"pinterest",
	"reddit",
	"whatsapp",
	"telegram",
	"discord",
	"slack",
	"medium",
	"tumblr",
	"twitch",
	"spotify",
	"apple",
	"android",
	"windows",
	"linux",
	"amazon",
	"google",
	"dropbox",
	"evernote",
	"notion",
	"trello",
	"asana",
	"zoom",
	"skype",
];

export function CloudDemo() {
	return (
		<div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
			<IconCloud iconSlugs={slugs} />
		</div>
	);
}
