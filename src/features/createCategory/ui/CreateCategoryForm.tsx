import { useCreateCategoryMutation } from '@/entities/category';
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createCategoryFormScheme, type CreateCategoryFormScheme } from '../lib/CreateCategoryFormScheme';

const defaultValues: CreateCategoryFormScheme = {
  name: '',
  budget: '',
};

export const CreateCategoryForm = () => {
  const [createCategory] = useCreateCategoryMutation();

  const form = useForm<CreateCategoryFormScheme>({
    resolver: zodResolver(createCategoryFormScheme),
    defaultValues,
  });

  const onSubmitHandler = async (data: CreateCategoryFormScheme) => {
    await createCategory({ ...data, budget: Number(data.budget) });
  };

  return (
    <Form {...form}>
      <form className="flex gap-4" onSubmit={form.handleSubmit(onSubmitHandler)}>
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category name</FormLabel>
              <FormControl>
                <Input placeholder="New category name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="name"
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category budget</FormLabel>
              <FormControl>
                <Input placeholder="Category budget" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="budget"
        />
        <Button className="mt-8" type="submit">
          + Add category
        </Button>
      </form>
    </Form>
  );
};
