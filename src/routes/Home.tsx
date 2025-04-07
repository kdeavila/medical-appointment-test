import { useAuth } from '../store/useAuth';
import { Navbar } from '../components/Navbar';
import { useState } from 'react';
import { ScheduleNow } from '../components/ScheduleNow';
import { ShowAppointments } from '../components/ShowAppointments ';

export function Home() {
	const [tabContent, setTabContent] = useState<
		'schedule-now' | 'show-appointments'
	>('schedule-now');
	const { patient } = useAuth();

	const TABS = [
		{ label: 'Schedule now', value: 'schedule-now' },
		{ label: 'Show appointments', value: 'show-appointments' },
	] as const;

	return (
		<>
			<header>
				<Navbar />
			</header>

			<main className="relative">
				<div className="container-center py-8">
					<h3 className="text-2xl font-bold mb-1">
						Welcome Mr/s. {patient?.name}
					</h3>
					<p className="text-neutral-700">Select an option to continue</p>

					<section className="mt-8 flex flex-col gap-2">
						<div className="flex items-center gap-x-2">
							{TABS.map((tab) => (
								<button
									key={tab.value}
									className={`inline-flex w-max px-4 py-2 rounded-lg cursor-pointer border ${
										tabContent === tab.value
											? 'bg-blue-500 text-neutral-100 border-transparent'
											: 'border-blue-500 text-blue-500 bg-transparent'
									}`}
									onClick={() => setTabContent(tab.value)}
								>
									{tab.label}
								</button>
							))}
						</div>

						<article className="mt-4">
							{tabContent === 'schedule-now' && <ScheduleNow />}
							{tabContent === 'show-appointments' && <ShowAppointments />}
						</article>
					</section>
				</div>
			</main>
		</>
	);
}
