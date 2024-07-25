import z from 'zod';

const baseSchema = z.object({
  bookId: z.number().min(1),
  returnedIn: z.string().min(1),
});

export const createReservationSchema = baseSchema;
export const updateReservationSchema = baseSchema.partial();
