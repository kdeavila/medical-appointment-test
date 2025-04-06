import { BuildingIcon } from './icons/BuildingIcon';

export function Navbar() {
	return (
		<nav className="w-full bg-neutral-50 border-b border-neutral-300">
			<div className="container px-2 md:px-0 flex justify-between mx-auto py-4">
				<div className="flex justify-center gap-x-2">
					<BuildingIcon className="size-6 text-blue-500" />
					<span className="text-xl font-bold text-blue-500">
						Medical IPS
					</span>
				</div>

				<ul className='flex items-center gap-x-4'>
					<li className='inline-flex'>
						<a className='text-neutral-700 font-medium hover:text-blue-500 transition-colors' href="#home">Home</a>
					</li>
					
					<li className='inline-flex'>
						<a className='text-neutral-700 font-medium hover:text-blue-500 transition-colors' href="#services">Services</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
