export type FormLogin = {
	documentNumber: string;
	birthDate: string;
};

export type Patient = {
	id: string;
	name: string;
	email: string;
	documentNumber: string;
	birthDate: string;
};

export type Specialty = {
	id: string;
	name: string;
};

export type Appointment = {
	id: string;
	date: string;
	time: string;
	doctor: string;
	specialtyId: string;
	status: 'available' | 'booked';
	patientId: string | null;
};

export type AuthState = {
	patient: Patient | null;
	isAuthenticated: boolean;
	setPatient: (patient: Patient) => void;
	logout: () => void;
};

export type AppointmentState = {
	appointments: Appointment[];
	setAppointments: (appointments: Appointment[]) => void;
	updateAppointment: (updated: Appointment) => void;
};
