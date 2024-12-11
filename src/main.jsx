import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {/* <QueryClientProvider client={QueryClient}> */}
        <RouterProvider router={router} />
      {/* </QueryClientProvider> */}
    </AuthProvider>
  </StrictMode>,
)
