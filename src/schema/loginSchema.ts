import { z } from 'zod';

const today = new Date();
const minDate = new Date();
minDate.setFullYear(today.getFullYear() - 120);

export const loginSchema = z.object({
	documentNumber: z
		.string()
		.min(5, { message: 'Document number must be at least 5 characters long' })
		.max(12, {
			message: 'The document number must be less than 12 characters',
		}),

	birthDate: z.string().date(),
});
