import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/shared/ui';
import { CalendarIcon, HomeIcon, InboxIcon, SearchIcon, SettingsIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

export const HomePage = () => {
  const form = useForm();

  return (
    <Layout>
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
    </Layout>
  );
};

const items = [
  {
    title: 'Home',
    url: '#',
    icon: HomeIcon,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: InboxIcon,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: CalendarIcon,
  },
  {
    title: 'Search',
    url: '#',
    icon: SearchIcon,
  },
  {
    title: 'Settings',
    url: '#',
    icon: SettingsIcon,
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Budget manager</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};
