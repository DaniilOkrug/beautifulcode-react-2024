import { DataTable } from '@/shared/ui';
import { columns } from '../lib/columns';

export const TransactionTable = () => {
  return <DataTable data={[]} columns={columns} />;
};
