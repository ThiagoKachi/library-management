import z from 'zod';

const baseSchema = z.object({
  name: z.string().min(1),
});

export const createAuthorSchema = baseSchema;
export const updateAuthorSchema = baseSchema.partial();
