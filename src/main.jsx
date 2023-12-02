import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import createRoute from './Route/createRoute.jsx'
import AuthProvider from './Authintication/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import AuthProvider from './Authintication/AuthProvider.jsx'
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <div className=''>
        <AuthProvider>
          <RouterProvider router={createRoute}></RouterProvider>
        </AuthProvider>
      </div>
      <Toaster></Toaster>
    </QueryClientProvider>

  </React.StrictMode>,

)
