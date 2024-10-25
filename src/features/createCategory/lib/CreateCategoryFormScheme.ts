import * as z from 'zod';

export const createCategoryFormScheme = z.object({
  name: z.string(),
  budget: z.string(),
});

export type CreateCategoryFormScheme = z.infer<typeof createCategoryFormScheme>;
