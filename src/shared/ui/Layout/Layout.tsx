import { SidebarProvider, SidebarTrigger } from '@/shared/ui';
import type { FC, PropsWithChildren, ReactNode } from 'react';

type LayoutProps = {
  sidebarSlot?: ReactNode;
};

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, sidebarSlot }) => {
  return (
    <SidebarProvider>
      {sidebarSlot}
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};
