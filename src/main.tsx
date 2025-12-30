
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './App.tsx';
import { RouterProvider } from 'react-router';
import { StrictMode } from 'react';
import CartProvider from './services/context.tsx';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CartProvider>
              <Toaster
                position="top-center"
                reverseOrder={false}
              />
              <RouterProvider router={router}></RouterProvider>
      </CartProvider>
  </StrictMode>

)
