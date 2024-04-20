import { RouteObject } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { CheckEmailPage, ResetPasswordPage, SignInPage, SignUpPage } from '@/pages/auth'
import { Decks } from '@/pages/decks'

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
    element: <Decks />,
    path: '/',
  },
]
