import type { RouteObject } from 'react-router-dom'

import { ProtectedRoute } from './guards'

export const adminRoutes: RouteObject[] = [
  {
    element: <ProtectedRoute allowedRoles={['admin']} />,
    children: [],
  },
]
