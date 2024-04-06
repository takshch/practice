import { RouteObject, createBrowserRouter } from 'react-router-dom';
import AdnetoGridTest from './pages/AdnetoGridTest';
import AdnetoInfiniteScrollTest from './pages/AdnetoInfiniteScrollTest';
import HomePage from './pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/grid',
    element: <AdnetoGridTest />,
  },
  {
    path: '/infinite-scroll',
    element: <AdnetoInfiniteScrollTest />,
  },
];

export const router = createBrowserRouter(routes);
