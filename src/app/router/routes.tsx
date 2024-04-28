import { ReactNode } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { CheckEmailPage, ResetPasswordPage, SignInPage, SignUpPage } from '@/pages/auth'
import { Decks } from '@/pages/decks'
import { ProfilePage } from '@/pages/profile'
import { useMeQuery } from '@/services/auth'

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { isError } = useMeQuery()

  return isError ? <>{children} </> : <Navigate to={ROUTES.home} />
}

export const publicRoutes: RouteObject[] = [
  {
    element: (
      <AuthGuard>
        <SignInPage />
      </AuthGuard>
    ),
    path: ROUTES.signIn,
  },
  {
    element: (
      <AuthGuard>
        <SignUpPage />
      </AuthGuard>
    ),
    path: ROUTES.signUp,
  },
  {
    element: (
      <AuthGuard>
        <ResetPasswordPage />,
      </AuthGuard>
    ),

    path: ROUTES.recoverPassword,
  },
  {
    element: (
      <AuthGuard>
        <CheckEmailPage />,
      </AuthGuard>
    ),

    path: ROUTES.checkEmail,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
  { element: <ProfilePage />, path: ROUTES.profile },
]
