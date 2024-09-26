export function TermsOfService() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
			<p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
				<p>
					By accessing or using 1Browser, you agree to be bound by these Terms
					of Service and all applicable laws and regulations. If you do not
					agree with any part of these terms, you may not use our service.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">2. Use of Service</h2>
				<p>
					You agree to use 1Browser only for purposes that are permitted by
					these Terms and any applicable law, regulation, or generally accepted
					practices or guidelines in relevant jurisdictions.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
				<p>
					When you create an account with us, you must provide information that
					is accurate, complete, and current at all times. Failure to do so
					constitutes a breach of the Terms, which may result in immediate
					termination of your account on our Service.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					4. Intellectual Property
				</h2>
				<p>
					The Service and its original content, features, and functionality are
					and will remain the exclusive property of 1Browser and its licensors.
					The Service is protected by copyright, trademark, and other laws of
					both the United States and foreign countries.
				</p>
			</section>

			{/* Add more sections as needed */}

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
				<p>
					If you have any questions about these Terms, please contact us at
					terms@1browser.one.
				</p>
			</section>
		</div>
	);
}
