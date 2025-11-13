import { useState } from 'react';

export function useUpdateAppointment<T>(id: string) {
	const baseUrl = 'http://localhost:3000/appointments/';
	const url = `${baseUrl}${id}`;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const updateAppointment = async (
		updatedFields: Partial<T>,
	): Promise<T | undefined> => {
		try {
			setLoading(true);
			setError(null);

			const res = await fetch(url, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedFields),
			});

			if (!res.ok) throw new Error('Failed to update appointment');

			const updated = await res.json();
			return updated;
		} catch (err: any) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	return { updateAppointment, loading, error };
}
