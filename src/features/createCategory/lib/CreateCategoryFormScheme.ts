import * as z from 'zod';

export const createCategoryFormScheme = z.object({
  name: z.string().min(1, ''),
});

export type CreateCategoryFormScheme = z.infer<typeof createCategoryFormScheme>;
