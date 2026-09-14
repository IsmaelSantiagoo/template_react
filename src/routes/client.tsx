import type { RouteObject } from 'react-router-dom'

import ChangePasswordPage from '@/pages/auth/change-password'
import ClientHome from '@/pages/client/home'

export const clientRoutes: RouteObject[] = [
  {
    path: 'home',
    element: <ClientHome />,
  },
  {
    path: 'change-password',
    element: <ChangePasswordPage />,
  }
]
