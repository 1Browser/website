import { MagicCard } from "@/components/magicui/magic-card";
import Image from "next/image";
import audioImg from "./iot-audio.webp";
import videoImg from "./iot-video.webp";
import editorImg from "./iot-editor.webp";
import canvasImg from "./iot-canvas.webp";

const cards = [
	{
		img: audioImg,
		title: "Audio",
	},
	{
		img: videoImg,
		title: "Video",
	},
	{
		img: editorImg,
		title: "Editor",
	},
	{
		img: canvasImg,
		title: "Canvas",
	},
];

export function InternetOfThoughtsDemo() {
	return (
		<div className={"grid grid-cols-1 gap-4 md:grid-cols-2"}>
			{cards.map((card) => (
				<MagicCard
					key={card.title}
					className="relative cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl overflow-hidden"
					gradientColor={"violet"}
				>
					<Image src={card.img} alt={card.title} className="opacity-90" />
					<div className="absolute top-0 left-0 bottom-0 right-0 z-10 flex flex-col items-center justify-center bg-background/40 uppercase font-normal backdrop-blur-sm hover:opacity-0 transition-opacity duration-300 text-4xl gap-2 rounded-xl">
						<p>Annotate on</p>
						<p className="font-bold text-violet-300 text-6xl">{card.title}</p>
					</div>
				</MagicCard>
			))}
		</div>
	);
}
