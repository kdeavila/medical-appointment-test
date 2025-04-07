export type FormLogin = {
	documentNumber: string;
	birthDate: string;
};

export type Patient = {
	id: number;
	name: string;
	email: string;
	documentNumber: string;
	birthDate: string;
}

export type AuthState = {
	patient: Patient | null;
	isAuthenticated: boolean;
	setPatient: (patient: Patient) => void;
	logout: () => void;
};
