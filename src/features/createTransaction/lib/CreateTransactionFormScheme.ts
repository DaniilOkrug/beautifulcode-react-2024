import { z } from 'zod';

export const createTransactionFormScheme = z.object({
  amount: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number({ message: '' })),
  categoryId: z.string().min(1, ''),
});

export type CreateTransactionFormScheme = z.infer<typeof createTransactionFormScheme>;
