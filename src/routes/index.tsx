import AppLayout from '@/pages/layout'
import NotFound from '@/pages/NotFound'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <NotFound />, // Replace with your default page or redirect
      },
    ],
  },

  // 404 - Not Found
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
