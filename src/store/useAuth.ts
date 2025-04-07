import { create } from 'zustand';
import { AuthState } from '../types';
import { persist } from 'zustand/middleware';

export const useAuth = create<AuthState>()(
	persist(
		(set) => ({
			patient: null,
			isAuthenticated: false,
			setPatient: (patient) => set({ patient, isAuthenticated: !!patient }),
			logout: () => set({ patient: null, isAuthenticated: false }),
		}),
		{ name: 'auth-storage' },
	),
);
