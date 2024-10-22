import { layoutWithSidebar } from '@/app/layouts/layoutWithSidebar.tsx';
import { HomePage } from '@/pages/home';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';

export const appRouter = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={layoutWithSidebar}>
          <Route element={<HomePage />} path="/" />
          <Route element={<HomePage />} path="/categories" />
          <Route element={<HomePage />} path="/transactions" />
        </Route>

        <Route element={<Navigate to="/" />} path="*" />
      </Route>,
    ),
  );
