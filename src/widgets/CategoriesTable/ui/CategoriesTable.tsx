import { useCreateCategoryMutation, useGetCategoriesQuery } from '@/entities/category';
import type { CreateCategoryFormScheme } from '@/features/createCategory';
import { createCategoryFormScheme, CreateCategoryTableFooter } from '@/features/createCategory';
import { DataTable, Form } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { columns } from '../lib/columns';

const defaultValues: CreateCategoryFormScheme = {
  name: '',
  budget: '',
};

export const CategoriesTable = () => {
  const { data: categoriesData = [] } = useGetCategoriesQuery();
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
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <DataTable columns={columns} data={categoriesData} footerSlot={<CreateCategoryTableFooter />} />
      </form>
    </Form>
  );
};
