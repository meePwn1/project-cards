import { RouteObject } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { Desks, ResetPasswordPage, SignInPage, SignUpPage } from '@/pages'

export const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: ROUTES.signIn,
  },
  {
    element: <SignUpPage />,
    path: ROUTES.signUp,
  },
  {
    element: <ResetPasswordPage />,
    path: ROUTES.resetPassword,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <Desks />,
    path: '/',
  },
]
