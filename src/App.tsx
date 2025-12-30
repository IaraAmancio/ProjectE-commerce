import './index.css';
import { createBrowserRouter } from 'react-router';
import { Home } from './pages/home';
import { Cart } from './pages/cart';
import { DetailsProduct } from './pages/detailsProduct';
import { Layout } from './components/layout';


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/products/:productId',
        element: <DetailsProduct/>
      }
    ]
  }
  ])
export default router;
