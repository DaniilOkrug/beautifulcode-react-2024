import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui';
import { CalendarIcon, HomeIcon, InboxIcon, SearchIcon, SettingsIcon } from 'lucide-react';

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

export const AppSidebar = () => {
  return (
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
  );
};
