import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Postara from './pages/Postara';

const routes: RouteObject[] = [
  {
    path: '',
    element: <Postara />,
  },
];

export const router = createBrowserRouter(routes);
