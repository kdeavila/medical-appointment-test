import { useEffect, useState } from 'react';
import { Appointment, Patient, Specialty } from '../types';

export function useAppointmentData<T>(endpoint: string) {
	const baseUrl = 'http://localhost:3000';

	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	const fetchData = async () => {
		try {
			const response = await fetch(baseUrl + endpoint);

			if (!response.ok) {
				throw new Error('Error consuming the API');
			}

			const data = await response.json();
			setData(data);
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [endpoint]);

	return { data, loading, error };
}

export function usePatient() {
	return useAppointmentData<Patient[]>('/patients');
}

export function useSpecialty() {
	return useAppointmentData<Specialty[]>('/specialty');
}

export function useAppointments() {
	return useAppointmentData<Appointment[]>('/appointments');
}
