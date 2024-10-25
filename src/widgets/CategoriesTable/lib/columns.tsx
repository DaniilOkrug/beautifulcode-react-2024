import type { Category } from '@/entities/category';
import { Button } from '@/shared/ui';
import type { ColumnDef } from '@tanstack/react-table';
import { TrashIcon } from 'lucide-react';

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'budget',
    header: 'Budget',
  },
  {
    header: ' ',
    accessorKey: 'actions',
    cell: () => (
      <div className="flex flex-grow justify-end">
        <Button variant="ghost" type="button">
          <TrashIcon />
        </Button>
      </div>
    ),
  },
];
