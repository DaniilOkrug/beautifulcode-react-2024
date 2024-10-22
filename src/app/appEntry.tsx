import { LayoutWithSidebar } from '@/app/layouts/LayoutWithSidebar.tsx';
import { HomePage } from '@/pages/home';
import '@/shared/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LayoutWithSidebar>
      <HomePage />
    </LayoutWithSidebar>
  </StrictMode>,
);
