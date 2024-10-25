import { useGetCategoriesQuery } from '@/entities/category';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createTransactionFormScheme, type CreateTransactionFormScheme } from '../lib/CreateTransactionFormScheme';

const defaultValues: CreateTransactionFormScheme = {
  category: '',
  amount: 0,
};

export const CreateTransactionForm = () => {
  const form = useForm<CreateTransactionFormScheme>({
    resolver: zodResolver(createTransactionFormScheme),
    defaultValues,
  });
  const { data: categoriesData = [] } = useGetCategoriesQuery();

  return (
    <Form {...form}>
      <form className="flex gap-4" onSubmit={form.handleSubmit(console.log)}>
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {!categoriesData.length ? (
                    <div className="flex justify-center">
                      <p className="text-mute text-xs">No Categories found</p>
                    </div>
                  ) : (
                    categoriesData.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Amount</FormLabel>
              <FormControl>
                <Input placeholder="Transaction Amount" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="amount"
        />
        <Button className="mt-8" type="submit">
          Add Transaction
        </Button>
      </form>
    </Form>
  );
};
