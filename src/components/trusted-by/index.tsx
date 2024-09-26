import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
	{
		name: "Sarah",
		username: "@sarahtech",
		body: "1Browser has completely transformed my online experience. The AI-powered insights are like having a personal research assistant. Game-changer!",
	},
	{
		name: "Alex",
		username: "@alexplorer",
		body: "As a crypto enthusiast, I'm blown away by 1Browser's Web3 features. The seamless integration of blockchain tech with everyday browsing is brilliant.",
	},
	{
		name: "Emily",
		username: "@em_writes",
		body: "The collaborative annotation feature in 1Browser is a dream for researchers like me. It's revolutionized how I work with online sources.",
	},
	{
		name: "Michael",
		username: "@mike_learns",
		body: "I've tried many browsers, but 1Browser's Second Brain integration is unparalleled. It's like it knows what I'm thinking before I do!",
	},
	{
		name: "Lisa",
		username: "@lisa_privacy",
		body: "Finally, a browser that takes user privacy seriously! 1Browser's approach to open information without compromising security is impressive.",
	},
	{
		name: "David",
		username: "@dave_dev",
		body: "As a developer, I appreciate the thoughtful design of 1Browser. It's not just feature-rich, it's intelligently crafted. Kudos to the team!",
	},
	{
		name: "Rachel",
		username: "@rach_reads",
		body: "The AI summarization feature in 1Browser has saved me countless hours of reading. It's like having a personal content curator!",
	},
	{
		name: "Tom",
		username: "@tom_teacher",
		body: "As an educator, I find 1Browser's collaborative features invaluable for group projects. It's changing how we approach online research.",
	},
	{
		name: "Olivia",
		username: "@liv_designs",
		body: "The clean, intuitive interface of 1Browser is a designer's dream. It's not just functional, it's beautiful to use.",
	},
	{
		name: "Nathan",
		username: "@nate_news",
		body: "1Browser's ability to cut through the noise and deliver relevant content is unmatched. It's become an essential tool in my journalism toolkit.",
	},
	{
		name: "Sophia",
		username: "@soph_secure",
		body: "The privacy features in 1Browser are top-notch. I finally feel in control of my data while browsing.",
	},
	{
		name: "Ethan",
		username: "@ethan_entrepreneur",
		body: "The Second Brain feature has revolutionized how I manage information for my startup. It's like having a digital co-founder!",
	},
	{
		name: "Isabella",
		username: "@bella_blogs",
		body: "As a content creator, 1Browser's AI insights have helped me stay ahead of trends. It's like having a crystal ball for the internet!",
	},
	{
		name: "Lucas",
		username: "@luke_learns",
		body: "The immersive translation feature has opened up a world of international content for me. Learning has never been this accessible!",
	},
	{
		name: "Ava",
		username: "@ava_analyst",
		body: "The data visualization capabilities of 1Browser are incredible. It turns complex information into easily digestible visuals.",
	},
	{
		name: "William",
		username: "@will_writes",
		body: "As an author, the distraction-free Zen Mode in 1Browser has become my go-to for focused writing sessions.",
	},
	{
		name: "Mia",
		username: "@mia_markets",
		body: "The crypto-friendly features of 1Browser make navigating Web3 a breeze. It's a game-changer for anyone in the blockchain space.",
	},
	{
		name: "James",
		username: "@james_codes",
		body: "The developer tools in 1Browser are next level. It's like they've thought of everything a coder could need.",
	},
	{
		name: "Charlotte",
		username: "@char_charts",
		body: "1Browser's ability to generate mind maps from articles has transformed how I approach complex topics. It's visual learning at its best!",
	},
	{
		name: "Benjamin",
		username: "@ben_business",
		body: "The AI-powered research assistant in 1Browser has become an indispensable part of my business strategy. It's like having a team of analysts at my fingertips.",
	},
	{
		name: "Amelia",
		username: "@amy_arts",
		body: "As an artist, I love how 1Browser helps me discover and organize visual inspiration from across the web. It's a creativity booster!",
	},
	{
		name: "Daniel",
		username: "@dan_data",
		body: "The way 1Browser handles big data is impressive. It's made my work in data science so much more efficient.",
	},
	{
		name: "Harper",
		username: "@harp_health",
		body: "As a healthcare professional, I appreciate how 1Browser helps me stay on top of the latest medical research. It's a valuable tool for continuing education.",
	},
	{
		name: "Sebastian",
		username: "@seb_student",
		body: "1Browser has transformed how I study. The AI summaries and mind maps make complex subjects so much easier to grasp.",
	},
	{
		name: "Evelyn",
		username: "@eve_environment",
		body: "The way 1Browser helps me track and understand environmental news is fantastic. It's become an essential tool in my activism.",
	},
	{
		name: "Leo",
		username: "@leo_legal",
		body: "As a lawyer, the advanced search and organization features in 1Browser have significantly improved my research efficiency. It's a game-changer for legal professionals.",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	name,
	username,
	body,
}: {
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				"border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img
					className="rounded-full"
					width="32"
					height="32"
					alt=""
					src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${name}`}
				/>
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium text-foreground">
						{name}
					</figcaption>
					<p className="text-xs font-medium text-foreground/40">{username}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export function TrustedBy() {
	return (
		<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
			<h3 className="text-2xl my-4">Trusted by Alpha Test Users</h3>
			<Marquee pauseOnHover className="[--duration:60s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:60s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent"></div>
		</div>
	);
}
