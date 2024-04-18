import { RouteObject } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { Desks, ResetPasswordPage, SignInPage, SignUpPage } from '@/pages'
import { CheckEmailPage } from '@/pages/auth/checkEmail'

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
    path: ROUTES.recoverPassword,
  },
  {
    element: <CheckEmailPage />,
    path: ROUTES.checkEmail,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <Desks />,
    path: '/',
  },
]
