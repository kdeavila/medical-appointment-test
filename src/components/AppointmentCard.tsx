import type { Appointment } from '../types';
import { UserIcon } from './icons/UserIcon';

type Props = {
	appointment: Appointment;
	onReserve?: (id: string) => void;
};

export function AppointmentCard({ appointment, onReserve }: Props) {
	return (
		<div className="ml-4 border border-neutral-300 rounded-lg p-4 flex justify-between items-center">
			<div className="flex items-center gap-x-3">
				<div className="rounded-full p-3 bg-blue-200 w-max text-blue-500">
					<UserIcon className="size-6 text-blue-500" />
				</div>

				<div>
					<p className="text-base font-semibold">{appointment.doctor}</p>
					<p className="text-sm text-neutral-600">{appointment.time}</p>
				</div>
			</div>

			<button
				onClick={() => onReserve?.(appointment.id)}
				className="inline-flex w-max px-4 py-2 rounded-lg bg-blue-500 text-neutral-100 cursor-pointer"
			>
				Reserve
			</button>
		</div>
	);
}
