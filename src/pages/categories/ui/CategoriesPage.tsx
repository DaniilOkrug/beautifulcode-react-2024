import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  TableCell,
  TableFooter,
  TableRow,
} from '@/shared/ui';
import { DataTable } from '@/shared/ui/DataTable/DataTable.tsx';
import type { ColumnDef } from '@tanstack/react-table';
import { TrashIcon } from 'lucide-react';
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
        <form>
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
            footerSlot={
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={1}>
                    <FormField
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="New category name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                      name="categoryName"
                    />
                  </TableCell>
                  <TableCell colSpan={1}>
                    <div className="flex flex-grow justify-end">
                      <Button variant="ghost" type="submit">
                        + Add category
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableFooter>
            }
          />
        </form>
      </Form>
    </section>
  );
};

export type Category = {
  id: string;
  name: string;
};

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    header: ' ',
    accessorKey: 'actions',
    cell: () => (
      <div className="flex flex-grow justify-end">
        <Button variant="ghost">
          <TrashIcon />
        </Button>
      </div>
    ),
  },
];
