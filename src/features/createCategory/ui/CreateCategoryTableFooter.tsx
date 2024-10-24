import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  TableCell,
  TableFooter,
  TableRow,
} from '@/shared/ui';
import {useFormContext} from 'react-hook-form';
import type {CreateCategoryFormScheme} from '../lib/CreateCategoryFormScheme';

export const CreateCategoryTableFooter = () => {
    const {control} = useFormContext<CreateCategoryFormScheme>();

    return (
        <TableFooter>
            <TableRow>
                <TableCell colSpan={1}>
                    <FormField
                        control={control}
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="New category name" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        name="name"
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
    );
};
