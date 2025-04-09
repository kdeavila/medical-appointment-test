import { create } from 'zustand';
import type { Appointment, AppointmentState } from '../types';

export const useAppointmentStore = create<AppointmentState>((set) => ({
	appointments: [],
	setAppointments: (appointments) => set({ appointments }),
	updateAppointment: (updated: Appointment) =>
		set((state) => ({
			appointments: state.appointments.map((appt) =>
				appt.id === updated.id ? updated : appt,
			),
		})),
}));
