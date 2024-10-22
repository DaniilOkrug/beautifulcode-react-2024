import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/shared/ui';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const createCategoryScheme = z.object({
  categoryName: z.string(),
});

type CreateCategoryScheme = z.infer<typeof createCategoryScheme>;

export const CategoriesPage = () => {
  const form = useForm<CreateCategoryScheme>();

  return (
    <section>
      <Form {...form}>
        <form className="flex items-end gap-2">
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            name="categoryName"
          />
          <Button type="submit">Add Category</Button>
        </form>
      </Form>
    </section>
  );
};
