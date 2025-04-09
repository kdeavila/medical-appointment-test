export function formatLongDate(dateString: string): string {
	const date = new Date(dateString + 'T00:00:00');

	return new Intl.DateTimeFormat('en-ES', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	}).format(date);
}
