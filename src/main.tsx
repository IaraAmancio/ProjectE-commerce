
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './App.tsx';
import { RouterProvider } from 'react-router';
import { StrictMode } from 'react';
import CartProvider from './services/context.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CartProvider>
              <RouterProvider router={router}></RouterProvider>
      </CartProvider>
  </StrictMode>

)
