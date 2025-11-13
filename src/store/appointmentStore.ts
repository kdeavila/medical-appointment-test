import { create } from 'zustand';
import type { AppointmentState } from '../types';

export const useAppointmentStore = create<AppointmentState>((set) => ({
	appointments: [],
	setAppointments: (appointments) => set({ appointments }),
	updateAppointment: (updated) =>
		set((state) => ({
			appointments: state.appointments.map((appt) =>
				appt.id === updated.id ? updated : appt,
			),
		})),
}));
