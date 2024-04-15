import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { Layout } from '@/components/layout'

import { privateRoutes, publicRoutes } from './routes'

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
    path: ROUTES.home,
  },
])

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
export const Router = () => {
  return <RouterProvider router={router} />
}
