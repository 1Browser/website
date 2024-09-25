export function FeatureTitle({ title }: { title: string }) {
	return (
		<div className="text-center my-10">
			<p className="text-secondary-foreground">FEATURES</p>
			<h2 className="text-6xl my-4">{title}</h2>
		</div>
	);
}
