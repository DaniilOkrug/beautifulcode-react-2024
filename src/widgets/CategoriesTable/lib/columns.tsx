import { Button } from '@/shared/ui';
import type { ColumnDef } from '@tanstack/react-table';
import { TrashIcon } from 'lucide-react';

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
