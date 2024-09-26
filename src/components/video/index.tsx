import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function Video() {
	return (
		<div className="relative mx-auto max-w-screen-xl px-4 py-16">
			<HeroVideoDialog
				animationStyle="from-center"
				videoSrc="https://www.youtube.com/embed/H4mqAO12qTk?si=mAkxzkcjSoZchYRR"
				thumbnailSrc="og.jpeg"
				thumbnailAlt="Hero Video"
			/>
		</div>
	);
}
