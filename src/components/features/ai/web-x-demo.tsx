import { useState } from "react";

export function WebXDemo() {
	const [tweetText, setTweetText] = useState("");
	const [tweets, setTweets] = useState([
		{
			id: 1,
			user: "John Doe",
			handle: "@johndoe",
			avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=John",
			content: "I wish my browser was cool.",
			time: "2h",
			replies: 3,
			retweets: 5,
			likes: 22,
			views: 1234,
		},
		{
			id: 2,
			user: "Jane Smith",
			handle: "@janesmith",
			avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jane",
			content: "Browsing internet is so boring. Is there a better way?",
			time: "4h",
			replies: 1,
			retweets: 2,
			likes: 15,
			views: 567,
		},
		{
			id: 3,
			user: "Alice Johnson",
			handle: "@alicejohnson",
			avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Alice Johson",
			content: "Guys! I heard about this new browser called 1browser.one",
			time: "6h",
			replies: 10,
			retweets: 45,
			likes: 105,
			views: 1230,
		},
		// Add more sample tweets here
	]);

	const handleTweet = () => {
		if (tweetText.trim()) {
			const newTweet = {
				id: tweets.length + 1,
				user: "Current User",
				handle: "@currentuser",
				avatar: "https://placekitten.com/50/50",
				content: tweetText,
				time: "now",
				replies: 0,
				retweets: 0,
				likes: 0,
				views: 0,
			};
			setTweets([newTweet, ...tweets]);
			setTweetText("");
		}
	};

	return (
		<div className="bg-black min-h-screen text-white flex">
			{/* Left Sidebar */}
			<aside className="w-64 border-r border-gray-700 p-4 sticky top-0 h-screen">
				<nav>
					<ul className="space-y-4">
						<li>
							<a href="#" className="text-xl font-bold">
								𝕏
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center">
								<span className="mr-4">🏠</span> Home
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center">
								<span className="mr-4">🔍</span> Explore
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center">
								<span className="mr-4">🔔</span> Notifications
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center">
								<span className="mr-4">✉️</span> Messages
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center">
								<span className="mr-4">📋</span> Lists
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center">
								<span className="mr-4">🔖</span> Bookmarks
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center">
								<span className="mr-4">👤</span> Profile
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center">
								<span className="mr-4">⚙️</span> Settings
							</a>
						</li>
					</ul>
				</nav>
			</aside>

			{/* Main Content */}
			<div className="flex-1">
				<header className="border-b border-gray-700 p-4 sticky top-0 bg-black bg-opacity-75 backdrop-blur-sm z-10">
					<h1 className="text-xl font-bold">Home</h1>
				</header>

				<main className="max-w-2xl mx-auto">
					<div className="border-b border-gray-700 p-4">
						<textarea
							className="w-full bg-transparent resize-none outline-none"
							placeholder="What's happening?"
							rows={3}
							value={tweetText}
							onChange={(e) => setTweetText(e.target.value)}
						/>
						<div className="flex justify-between items-center mt-2">
							<div className="flex space-x-4 text-blue-400">
								<button>📷</button>
								<button>GIF</button>
								<button>📊</button>
								<button>😊</button>
							</div>
							<button
								className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600 transition"
								onClick={handleTweet}
							>
								Tweet
							</button>
						</div>
					</div>

					<div className="divide-y divide-gray-700">
						{tweets.map((tweet) => (
							<div key={tweet.id} className="p-4">
								<div className="flex items-start">
									<img
										src={tweet.avatar}
										alt={`${tweet.user} avatar`}
										className="w-12 h-12 rounded-full mr-3"
									/>
									<div className="flex-1">
										<div className="flex items-center">
											<span className="font-bold">{tweet.user}</span>
											<span className="text-gray-500 ml-2">
												{tweet.handle} · {tweet.time}
											</span>
										</div>
										<p className="mt-1">{tweet.content}</p>
										<div className="flex justify-between mt-3 text-gray-500">
											<button className="hover:text-blue-400">
												💬 {tweet.replies}
											</button>
											<button className="hover:text-green-400">
												🔁 {tweet.retweets}
											</button>
											<button className="hover:text-red-400">
												❤️ {tweet.likes}
											</button>
											<button className="hover:text-blue-400">
												📊 {tweet.views}
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</main>
			</div>

			{/* Right Sidebar */}
			<aside className="w-80 border-l border-gray-700 p-4 sticky top-0 h-screen">
				<div className="bg-gray-900 rounded-lg p-4 mb-4">
					<h2 className="font-bold mb-2">What's happening</h2>
					<ul className="space-y-2">
						<li>#Trending1</li>
						<li>#Trending2</li>
						<li>#Trending3</li>
					</ul>
				</div>
				<div className="bg-gray-900 rounded-lg p-4">
					<h2 className="font-bold mb-2">Who to follow</h2>
					<ul className="space-y-2">
						<li className="flex items-center">
							<img
								src="https://api.dicebear.com/9.x/adventurer/svg?seed=Alice"
								alt="Alice avatar"
								className="w-10 h-10 rounded-full mr-2"
							/>
							<div>
								<div className="font-bold">Alice Johnson</div>
								<div className="text-gray-500">@alicejohnson</div>
							</div>
						</li>
						<li className="flex items-center">
							<img
								src="https://api.dicebear.com/9.x/adventurer/svg?seed=Bob"
								alt="Bob avatar"
								className="w-10 h-10 rounded-full mr-2"
							/>
							<div>
								<div className="font-bold">Bob Williams</div>
								<div className="text-gray-500">@bobwilliams</div>
							</div>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
}
