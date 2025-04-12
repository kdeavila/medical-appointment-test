import { useEffect, useState } from 'react';
import { useAppointments, useSpecialty } from '../hooks/useFetch';
import { useAppointmentStore } from '../store/appointmentStore';
import { groupAppointmentsByDate } from '../utils/appointment';
import { AppointmentList } from './AppointmentList';

export function ScheduleNow() {
	const { data: specialties, loading: loadingSpecialty } = useSpecialty();
	const { data: fetchedAppointments } = useAppointments();
	const [selectedSpecialty, setSelectedSpecialty] = useState('');
	const { appointments, setAppointments } = useAppointmentStore();

	useEffect(() => {
		if (fetchedAppointments) {
			setAppointments(fetchedAppointments);
		}
	}, [fetchedAppointments, setAppointments]);

	const availableAppointments = appointments?.filter(
		(appt) =>
			appt.status === 'available' && appt.specialtyId === selectedSpecialty,
	);

	const grouped = groupAppointmentsByDate(availableAppointments ?? []);

	return (
		<>
			<form className="flex flex-col gap-4 max-w-lg mb-8">
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
						<option value="" disabled>
							{loadingSpecialty ? 'Loading specialties...' : 'Choose one'}
						</option>

						{specialties?.map(({ id, name }) => (
							<option key={id} value={id}>
								{name}
							</option>
						))}
					</select>
				</div>
			</form>

			{selectedSpecialty ? (
				Object.keys(grouped).length > 0 ? (
					<AppointmentList appointments={grouped} />
				) : (
					<p className="text-neutral-400 mt-4">
						No available appointments for this specialty.
					</p>
				)
			) : (
				<p className="text-neutral-400 mt-4">
					Please select a specialty to view appointments.
				</p>
			)}
		</>
	);
}
