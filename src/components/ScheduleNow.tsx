import { useSpecialty } from '../hooks/useFetch';
import { useState } from 'react';

export function ScheduleNow() {
	const { data: specialties, loading } = useSpecialty();
	const [selectedSpecialty, setSelectedSpecialty] = useState('');

	return (
		<>
			<form className="flex flex-col gap-4 max-w-md">
				<div className="flex flex-col gap-2">
					<label
						htmlFor="specialty"
						className="text-sm font-medium text-neutral-700"
					>
						Select a specialty
					</label>

					<select
						id="specialty"
						name="specialty"
						className="border border-neutral-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
						value={selectedSpecialty}
						onChange={(e) => setSelectedSpecialty(e.target.value)}
					>
						<option disabled value="">
							{loading ? 'Loading specialties...' : 'Choose one'}
						</option>

						{specialties?.map(({ id, name }) => (
							<option key={id} value={String(id)}>
								{name}
							</option>
						))}
					</select>
				</div>
			</form>

			<section className="mt-6">
				{selectedSpecialty ? (
					<p className="text-blue-600">
						Showing available appointments for{' '}
						<strong>
							{
								specialties?.find((s) => String(s.id) === selectedSpecialty)
									?.name
							}
						</strong>
					</p>
				) : (
					<p className="text-neutral-500">
						Please select a specialty to view appointments.
					</p>
				)}
			</section>
		</>
	);
}
