import { RouteObject } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { Login } from '@/pages/login'
import { Register } from '@/pages/register'

export const publicRoutes: RouteObject[] = [
  {
    element: <Login />,
    path: ROUTES.signIn,
  },
  {
    element: <Register />,
    path: ROUTES.signUp,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <div>main</div>,
    path: '/',
  },
]
