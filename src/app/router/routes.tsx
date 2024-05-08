import { RouteObject } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { CheckEmailPage, ResetPasswordPage, SignInPage, SignUpPage } from '@/pages/auth'
import { Cards } from '@/pages/cards/Cards'
import { Decks } from '@/pages/decks'
import { Learn } from '@/pages/learn'
import { ProfilePage } from '@/pages/profile'

export const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: ROUTES.SIGN_IN,
  },
  {
    element: <SignUpPage />,
    path: ROUTES.SIGN_UP,
  },
  {
    element: <ResetPasswordPage />,

    path: ROUTES.RECOVER_PASSWORD,
  },
  {
    element: <CheckEmailPage />,

    path: ROUTES.CHECK_EMAIL,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: ROUTES.HOME,
  },
  { element: <Learn />, path: ROUTES.LEARN() },
  { element: <Cards />, path: ROUTES.CARDS() },
  { element: <ProfilePage />, path: ROUTES.PROFILE },
]
