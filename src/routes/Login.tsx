import { BuildingIcon } from '../components/icons/BuildingIcon';

export function Login() {
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

				<form className="w-full max-w-lg mx-auto flex flex-col gap-4 p-8 rounded-lg bg-neutral-50">
					<div className='flex flex-col gap-2'>
						<label className='text-sm text-neutral-700' htmlFor="documentNumber">Document number</label>
						<input className='border-1 border-neutral-400 outline-0 py-2 px-4 rounded-lg focus:border-blue-500 transition-colors' type="number" placeholder='123456789' name="documentNumber" required />
					</div>

					<div className='flex flex-col gap-2'>
						<label className='text-sm text-neutral-700' htmlFor="birthDate">Birth of date</label>
						<input className='border-1 border-neutral-400 outline-0 py-2 px-4 rounded-lg focus:border-blue-500 transition-colors' type="date" name="birthDate" required />
					</div>

					<button className='block text-center cursor-pointer bg-blue-500 px-4 py-2 rounded-lg text-neutral-100 font-semibold hover:bg-blue-400 transition-colors' type="submit">Log in</button>
				</form>
			</div>
		</main>
	);
}
