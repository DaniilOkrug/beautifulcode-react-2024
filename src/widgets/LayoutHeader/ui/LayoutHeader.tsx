import { Separator, SidebarTrigger } from '@/shared/ui';

export const LayoutHeader = () => {
  return (
    <div className="flex gap-2 border-b bg-sidebar px-4 py-2">
      <SidebarTrigger />

      <Separator orientation="vertical" className="h-auto" />

      <p>Budget: 0$</p>
    </div>
  );
};
