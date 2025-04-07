import { useEffect, useState } from 'react';
import { Patient } from '../types';

export function useFetch<T>(endpoint: string) {
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
	return useFetch<Patient[]>('/patients');
}
