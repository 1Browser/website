export function PrivacyPolicy() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
			<p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
				<p>
					Welcome to 1Browser. We respect your privacy and are committed to
					protecting your personal data. This privacy policy will inform you
					about how we look after your personal data when you visit our website
					and tell you about your privacy rights and how the law protects you.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
				<p>
					We may collect, use, store and transfer different kinds of personal
					data about you, including:
				</p>
				<ul className="list-disc list-inside ml-4">
					<li>Identity Data</li>
					<li>Contact Data</li>
					<li>Technical Data</li>
					<li>Usage Data</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
				<p>
					We will only use your personal data when the law allows us to. Most
					commonly, we will use your personal data in the following
					circumstances:
				</p>
				<ul className="list-disc list-inside ml-4">
					<li>To provide and maintain our Service</li>
					<li>To notify you about changes to our Service</li>
					<li>To provide customer support</li>
					<li>
						To gather analysis or valuable information so that we can improve
						our Service
					</li>
				</ul>
			</section>

			{/* Add more sections as needed */}

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
				<p>
					If you have any questions about this Privacy Policy, please contact us
					at privacy@1browser.one.
				</p>
			</section>
		</div>
	);
}
