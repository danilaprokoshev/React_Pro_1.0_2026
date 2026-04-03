import { createBrowserRouter } from 'react-router';
import { App } from '1-app/App';
import { TaskPage } from '2-pages/tasks';
import { RHFPage } from '2-pages/RHF';
import { NotFoundPage } from '2-pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <TaskPage />,
      },
      {
        path: 'rhf',
        element: <RHFPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
