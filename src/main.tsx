import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Snippets from './features/snippets/pages/Snippets.tsx';
import ErrorPage from './common/pages/ErrorPage.tsx';
import SnippetPage from './features/snippets/pages/SnippetPage.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Snippets />,
  },
  {
    path: '/snippet/create',
    element: <div>Create a snippet</div>,
  },
  {
    path: '/snippet/:uuid',
    element: <SnippetPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
