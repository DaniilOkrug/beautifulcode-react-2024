import * as z from 'zod';

export const createCategoryFormScheme = z.object({
  categoryName: z.string().min(1, ''),
});

export type CreateCategoryFormScheme = z.infer<typeof createCategoryFormScheme>;
