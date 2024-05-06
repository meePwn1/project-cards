import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { Layout } from '@/components/layout'
import { useMeQuery } from '@/services/auth/auth.service'

import { privateRoutes, publicRoutes } from './routes'

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
    path: ROUTES.HOME,
  },
])

function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return <div>...loading</div>
  }

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />
}
export const Router = () => {
  return <RouterProvider router={router} />
}
