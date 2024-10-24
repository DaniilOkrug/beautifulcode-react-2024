import type { CreateCategoryFormScheme } from '@/features/createCategory';
import { createCategoryFormScheme, CreateCategoryTableFooter } from '@/features/createCategory';
import { DataTable, Form } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { Category } from '../lib/columns';
import { columns } from '../lib/columns';

const defaultValues: CreateCategoryFormScheme = {
  categoryName: '',
};

export const CategoriesTable = () => {
  const form = useForm<CreateCategoryFormScheme>({
    resolver: zodResolver(createCategoryFormScheme),
    defaultValues,
  });

  const onSubmitHandler = (data: CreateCategoryFormScheme) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        <DataTable
          columns={columns}
          data={
            [
              {
                id: '728ed52f',
                name: 'Test category',
              },
              {
                id: '728ed52f',
                name: 'Test category 2',
              },
              {
                id: '728ed52f',
                name: 'Test category 3',
              },
            ] as Category[]
          }
          footerSlot={<CreateCategoryTableFooter />}
        />
      </form>
    </Form>
  );
};
