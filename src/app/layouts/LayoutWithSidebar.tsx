import { Layout } from '@/shared/ui';
import { AppSidebar } from '@/widgets/AppSidebar';
import type { FC, PropsWithChildren } from 'react';

export const LayoutWithSidebar: FC<PropsWithChildren> = ({ children }) => (
  <Layout sidebarSlot={<AppSidebar />}>{children}</Layout>
);
