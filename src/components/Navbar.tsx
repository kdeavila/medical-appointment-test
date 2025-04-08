import { useNavigate } from 'react-router';
import { useAuth } from '../store/useAuth';
import { BuildingIcon } from './icons/BuildingIcon';
import { LogoutIcon } from './icons/LogoutIcon';
import { UserIcon } from './icons/UserIcon';

export function Navbar() {
	const { patient, isAuthenticated, logout } = useAuth();
	const navigator = useNavigate();

	return (
		<nav className="w-full border-b border-neutral-300">
			<div className="container-center flex items-center justify-between mx-auto py-4">
				<div className="flex justify-center gap-x-2">
					<BuildingIcon className="size-6 text-blue-500" />
					<span className="text-xl font-bold text-blue-500">Medical IPS</span>
				</div>

				{isAuthenticated ? (
					<div className="group flex items-center gap-x-2 text-neutral-700">
						<div className="flex items-center gap-x-1">
							<UserIcon className="size-5" />
							<span>{patient?.name}</span>
						</div>

						<button
							className="p-2 cursor-pointer hover:text-red-500 transition-colors"
							onClick={() => {
								logout();
								navigator('/');
							}}
						>
							<LogoutIcon className="size-5 hover:" />
						</button>
					</div>
				) : (
					<ul className="flex items-center gap-x-6">
						<li className="inline-flex">
							<a
								className="text-neutral-700 font-medium hover:text-blue-500 transition-colors"
								href="#home"
							>
								Home
							</a>
						</li>

						<li className="inline-flex">
							<a
								className="text-neutral-700 font-medium hover:text-blue-500 transition-colors"
								href="#services"
							>
								Services
							</a>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
}
