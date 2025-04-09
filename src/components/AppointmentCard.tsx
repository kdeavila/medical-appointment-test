import { useNavigate } from 'react-router';
import { useUpdateAppointment } from '../hooks/useUpdateAppointment';
import { useAppointmentStore } from '../store/appointmentStore';
import type { Appointment } from '../types';
import { UserIcon } from './icons/UserIcon';

export function AppointmentCard({ appointment }: { appointment: Appointment }) {
	const id = appointment.id;
	const { updateAppointment } = useUpdateAppointment<Appointment>(id);
	const { updateAppointment: updateStore } = useAppointmentStore();
	const navigate = useNavigate();

	const onClick = async () => {
		const updated = await updateAppointment({ status: 'booked' });

		if (updated) {
			updateStore(updated);
		}

		navigate(`/confirmation/${updated?.id}`);
	};

	return (
		<div className="border border-neutral-300 rounded-lg p-4 flex justify-between items-center">
			<div className="flex items-center gap-x-3 mr-4">
				<div className="rounded-full p-3 bg-blue-200 w-max text-blue-500">
					<UserIcon className="size-6 text-blue-500" />
				</div>

				<div>
					<strong className="text-base font-semibold text-wrap">
						{appointment.doctor}
					</strong>
					<p className="text-sm text-neutral-600">{appointment.time}</p>
				</div>
			</div>

			<button
				type="button"
				onClick={onClick}
				className="inline-flex w-max px-4 py-2 rounded-lg bg-blue-500 text-neutral-100 cursor-pointer"
			>
				Reserve
			</button>
		</div>
	);
}
