import { zodResolver } from '@hookform/resolvers/zod';
import { BuildingIcon } from '../components/icons/BuildingIcon';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../schema/loginSchema';
import { formLogin } from '../types';

export function Login() {
	const today = new Date().toISOString().split('T')[0];

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<formLogin>({
		resolver: zodResolver(loginSchema),
	});

	return (
		<main className="flex items-center justify-center min-h-dvh">
			<div className="container-center">
				<article className="flex flex-col items-center gap-6 text-center mb-8">
					<BuildingIcon className="text-blue-500 size-16" />

					<div>
						<h1 className="text-5xl font-bold mb-1">Medical IPS</h1>
						<p className="text-neutral-700 text-lg">
							Please enter your credentials to log in
						</p>
					</div>
				</article>

				<form
					onSubmit={handleSubmit(() => {})}
					className="w-full max-w-lg mx-auto flex flex-col gap-4 p-8 rounded-lg bg-neutral-50"
				>
					<div className="flex flex-col gap-2">
						<label
							className="text-sm text-neutral-700"
							htmlFor="documentNumber"
						>
							Document number
						</label>
						<input
							className={`border-1 border-neutral-400 outline-0 py-2 px-4 rounded-lg transition-colors ${errors.documentNumber?.message ? 'border-red-500' : 'focus:border-blue-500'}`}
							type="number"
							placeholder="123456789"
							{...register('documentNumber')}
						/>
						{errors.documentNumber?.message && (
							<p className="text-sm text-red-500">
								{errors.documentNumber?.message}
							</p>
						)}
					</div>

					<div className="flex flex-col gap-2">
						<label className="text-sm text-neutral-700" htmlFor="birthDate">
							Birth of date
						</label>
						<input
							className={`border-1 border-neutral-400 outline-0 py-2 px-4 rounded-lg transition-colors ${errors.birthDate?.message ? 'border-red-500' : 'focus:border-blue-500'}`}
							type="date"
							min="1905-01-01"
							max={today}
							{...register('birthDate')}
						/>

						{errors.birthDate?.message && (
							<p className="text-sm text-red-500">
								{errors.birthDate?.message}
							</p>
						)}
					</div>

					<button
						className="block text-center cursor-pointer bg-blue-500 px-4 py-2 rounded-lg text-neutral-100 font-semibold hover:bg-blue-400 transition-colors"
						type="submit"
					>
						Log in
					</button>
				</form>
			</div>
		</main>
	);
}
