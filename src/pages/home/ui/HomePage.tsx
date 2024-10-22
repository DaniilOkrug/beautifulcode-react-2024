import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/shared/ui';
import { useForm } from 'react-hook-form';

export const HomePage = () => {
  const form = useForm();

  return (
    <div className="p-4">
      <h1>Budget manager</h1>

      <p>Balance: $0.00</p>

      <Form {...form}>
        <form className="w-[200px]">
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
            name="category-name"
          />
          <Button type="submit">Add Category</Button>
        </form>
      </Form>
    </div>
  );
};
