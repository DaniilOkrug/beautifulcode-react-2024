import { Button, Input, TableCell, TableFooter, TableRow } from '@/shared/ui';
import { DataTable } from '@/shared/ui/DataTable/DataTable.tsx';
import type { ColumnDef } from '@tanstack/react-table';
import { TrashIcon } from 'lucide-react';
import * as z from 'zod';

const createCategoryScheme = z.object({
  categoryName: z.string(),
});

type CreateCategoryScheme = z.infer<typeof createCategoryScheme>;

export const CategoriesPage = () => {
  // const form = useForm<CreateCategoryScheme>();

  return (
    <section className="mx-auto max-w-[1120px]">
      {/*<Form {...form}>*/}
      {/*  <form className="flex items-end gap-2">*/}
      {/*    <FormField*/}
      {/*      control={form.control}*/}
      {/*      render={({ field }) => (*/}
      {/*        <FormItem>*/}
      {/*          <FormLabel>Category Name</FormLabel>*/}
      {/*          <FormControl>*/}
      {/*            <Input {...field} />*/}
      {/*          </FormControl>*/}
      {/*          <FormMessage />*/}
      {/*        </FormItem>*/}
      {/*      )}*/}
      {/*      name="categoryName"*/}
      {/*    />*/}
      {/*    <Button type="submit">Add Category</Button>*/}
      {/*  </form>*/}
      {/*</Form>*/}

      <DataTable
        columns={columns}
        data={
          [
            {
              id: '728ed52f',
              name: 'Test category',
            },
          ] as Category[]
        }
        footerSlot={
          <TableFooter>
            <TableRow>
              <TableCell colSpan={1}>
                <Input />
              </TableCell>
              <TableCell colSpan={1}>
                <div className="flex flex-grow justify-end">
                  <Button variant="ghost">+ Add category</Button>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        }
      />
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
