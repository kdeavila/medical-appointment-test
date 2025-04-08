export function formatLongDate(dateString: string): string {
	const date = new Date(dateString);

	return new Intl.DateTimeFormat('es-CO', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	}).format(date);
}
