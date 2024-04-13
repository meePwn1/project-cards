import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { privateRoutes, publicRoutes } from './routes'

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
export const Router = () => {
  return <RouterProvider router={router} />
}
