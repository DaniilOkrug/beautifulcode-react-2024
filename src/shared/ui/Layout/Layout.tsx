import type { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '../Sidebar/Sidebar';

type LayoutProps = {
  sidebarSlot?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ sidebarSlot }) => {
  return (
    <SidebarProvider>
      {sidebarSlot}
      <main>
        <SidebarTrigger />
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};
