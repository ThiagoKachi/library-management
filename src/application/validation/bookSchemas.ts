import z from 'zod';

const baseSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  author: z.string().min(1),
  image: z.string().min(1),
  category: z.string().min(1),
  publishedYear: z.number().min(1).max(9999),
  isBorrowed: z.boolean().default(false),
  returnDate: z.date().optional(),
});

export const createBookSchema = baseSchema;
export const updateBookSchema = baseSchema.partial();
