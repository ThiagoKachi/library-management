import z from 'zod';

const baseSchema = z.object({
  name: z.string().min(1),
});

export const createCategorySchema = baseSchema;
export const updateCategorySchema = baseSchema.partial();
