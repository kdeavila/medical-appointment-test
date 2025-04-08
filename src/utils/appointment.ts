import type { Appointment } from '../types';

export function groupAppointmentsByDate(appointments: Appointment[]) {
	return appointments.reduce<Record<string, Appointment[]>>(
		(acc, appointment) => {
			const { date } = appointment;

			if (!acc[date]) {
				acc[date] = [];
			}

			acc[date].push(appointment);

			return acc;
		},
		{} as Record<string, Appointment[]>,
	);
}
