import { useNavigate } from 'react-router';
import { useAuth } from '../store/useAuth';

export function Home() {
	const { patient, logout } = useAuth();
	const navigate = useNavigate();

	return (
		<div className="grid place-content-center gap-2 min-h-dvh">
			<h3 className="text-4xl md:text-5xl font-bold">
				Welcome Mr/s. {patient?.name}
			</h3>
			<p className="text-lg text-neutral-700">
				<strong>Email:</strong>
				{patient?.email}
			</p>
			<p className="text-lg text-neutral-700">
				<strong>Birthdate</strong>
				{patient?.birthDate}
			</p>
			<p className="text-lg text-neutral-700">
				<strong>Document number:</strong>
				{patient?.documentNumber}
			</p>

			<button
				className="bg-blue-500 py-2 px-4 rounded-lg text-neutral-100 font-semibold w-max cursor-pointer"
				onClick={() => {
					logout();
					navigate('/');
				}}
			>
				Log out
			</button>
		</div>
	);
}
