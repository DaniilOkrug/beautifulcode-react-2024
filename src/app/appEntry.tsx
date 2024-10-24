import { appRouter } from '@/app/appRouter.tsx';
import '@/shared/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

async function initApp() {
  const module = await import('@/shared/api/mock/browser');
  await module.startApiMockWorker();
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

void initApp().then(() => {
  root.render(
    <StrictMode>
      <RouterProvider router={appRouter()} />
    </StrictMode>,
  );
});
