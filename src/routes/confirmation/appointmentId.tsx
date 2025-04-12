import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CheckIcon } from '../../components/icons/CheckIcon';
import { useAppointmentStore } from '../../store/appointmentStore';
import { formatLongDate } from '../../utils/format';
import { useSpecialty } from '../../hooks/useFetch';

export function Confirmation() {
	const { appointmentId } = useParams();
	const navigate = useNavigate();

	const appointment = useAppointmentStore((state) =>
		state.appointments.find((appt) => appt.id === appointmentId),
	);

	const { data: specialties } = useSpecialty();
	const specialty = specialties?.find((s) => s.id === appointment?.specialtyId);

	useEffect(() => {
		if (!appointment) {
			navigate('/home', { replace: true });
		}
	}, [appointment, navigate]);

	if (!appointment) {
		return null;
	}

	return (
		<main className="min-h-screen flex items-center justify-center container-center">
			<section className="w-full max-w-4xl mt-8 border border-neutral-200 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg p-4">
				<div className="flex flex-col justify-center items-center text-center px-4">
					<div className="size-16 bg-blue-200 rounded-full flex items-center justify-center mb-4">
						<CheckIcon className="size-10 text-blue-600" />
					</div>
					<h1 className="text-2xl font-bold text-gray-800 mb-2">
						Appointment confirmed!
					</h1>
					<p className="text-neutral-600">
						Your appointment has been successfully booked.
					</p>

					<button
						onClick={() => navigate('/home')}
						className="mt-6 bg-blue-500 text-white px-5 py-2 rounded-lg cursor-pointer"
					>
						Back to home
					</button>
				</div>

				<article className="bg-neutral-100 rounded-lg p-6 flex flex-col gap-4 text-sm">
					<header>
						<h2 className="text-lg font-semibold text-gray-800">
							Appointment Details
						</h2>
					</header>

					<div>
						<p className="font-semibold text-neutral-700">Date</p>
						<p className="text-neutral-600">
							{formatLongDate(appointment.date)}
						</p>
					</div>

					<div>
						<p className="font-semibold text-neutral-700">Hour</p>
						<p className="text-neutral-600">{appointment.time}</p>
					</div>

					<div>
						<p className="font-semibold text-neutral-700">Doctor</p>
						<p className="text-neutral-600">{appointment.doctor}</p>
					</div>

					<div>
						<p className="font-semibold text-neutral-700">Specialty</p>
						<p className="text-neutral-600">{specialty?.name}</p>
					</div>

					<footer className="bg-blue-100 px-4 py-3 rounded-md">
						<p className="text-sm text-blue-700 font-semibold mb-1">Reminder</p>
						<p className="text-sm text-neutral-600">
							Please arrive 15 minutes before your appointment. Don’t forget to
							bring your ID.
						</p>
					</footer>
				</article>
			</section>
		</main>
	);
}
