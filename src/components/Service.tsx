export function Service({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
	return (
		<li className="flex flex-col gap-2 p-8 bg-neutral-200/40 rounded-lg">
			<div className="rounded-full p-4 bg-blue-200 w-max">
				{icon}
			</div>

			<h4 className="font-semibold text-xl">{title}</h4>
			<p className="text-neutral-600 text-balance font-normal">{desc}</p>
		</li>
	);
}
