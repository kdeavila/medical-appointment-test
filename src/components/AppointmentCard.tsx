import { useUpdateAppointment } from '../hooks/useUpdateAppointment';
import { useAppointmentStore } from '../store/appointmentStore';
import type { Appointment } from '../types';
import { UserIcon } from './icons/UserIcon';
import { useAuth } from '../store/useAuth';
import { useNavigate } from 'react-router';

export function AppointmentCard({ appointment }: { appointment: Appointment }) {
	const { id: appointmentId, status, doctor, time } = appointment;

	const { patient } = useAuth();
	const patientId = patient?.id;

	const { updateAppointment } =
		useUpdateAppointment<Appointment>(appointmentId);
	const { updateAppointment: updateStore } = useAppointmentStore();

	const navigate = useNavigate();

	const isAvailable = status === 'available';

	const onClick = async () => {
		const updated = await updateAppointment({
			status: isAvailable ? 'booked' : 'available',
			patientId: isAvailable ? patientId : null,
		});

		if (updated) {
			updateStore(updated);
		}

		if (isAvailable) {
			navigate(`/confirmation/${updated?.id}`);
		}
	};

	return (
		<div className="border border-neutral-300 rounded-lg p-4 flex justify-between items-center">
			<div className="flex items-center gap-x-3 mr-4">
				<div className="rounded-full p-3 bg-blue-200 w-max text-blue-500">
					<UserIcon className="size-6 text-blue-500" />
				</div>

				<div>
					<strong className="text-base font-semibold text-wrap">
						{doctor}
					</strong>
					<p className="text-sm text-neutral-600">{time}</p>
				</div>
			</div>

			<button
				type="button"
				onClick={onClick}
				className={`inline-flex w-max px-4 py-2 rounded-lg text-neutral-100 cursor-pointer ${isAvailable ? 'bg-blue-500' : 'bg-red-500'}`}
			>
				{isAvailable ? 'Schedule' : 'Cancel'}
			</button>
		</div>
	);
}
