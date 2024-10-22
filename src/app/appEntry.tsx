import { appRouter } from '@/app/appRouter.tsx';
import '@/shared/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={appRouter()} />
  </StrictMode>,
);
