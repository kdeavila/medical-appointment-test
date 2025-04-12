import type { Appointment } from '../types';
import { formatLongDate } from '../utils/format';
import { AppointmentCard } from './AppointmentCard';

interface Props {
	appointments: Record<string, Appointment[]>;
}

export function AppointmentList({ appointments }: Props) {
	return (
		<>
			{Object.entries(appointments).map(([date, items]) => (
				<div key={date} className="first:mt-0 mt-8 space-y-6">
					<h3 className="font-bold text-lg mb-2">{formatLongDate(date)}</h3>

					<div className="space-y-4">
						{items.map((appt) => (
							<AppointmentCard key={appt.id} appointment={appt} />
						))}
					</div>
				</div>
			))}
		</>
	);
}
