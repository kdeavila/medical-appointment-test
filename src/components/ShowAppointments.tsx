import { useAppointmentStore } from '../store/appointmentStore';
import { useAuth } from '../store/useAuth';
import { groupAppointmentsByDate } from '../utils/appointment';
import { AppointmentList } from './AppointmentList';

export function ShowAppointments() {
	const { patient } = useAuth();
	const id = patient?.id;

	const { appointments } = useAppointmentStore();
	const filtered = appointments.filter((p) => p.patientId === id);

	const grouped = groupAppointmentsByDate(filtered);

	return (
		<>
			{filtered.length > 0 ? (
				<AppointmentList appointments={grouped} />
			) : (
				<p className="text-neutral-400">No appointments available.</p>
			)}
		</>
	);
}
