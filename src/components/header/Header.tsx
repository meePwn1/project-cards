import { Link, Navigate } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { useMeQuery } from '@/services/auth/auth.service'
import clsx from 'clsx'

import s from './Header.module.scss'

import { Button } from '../ui'
import { HeaderProfile } from './headerProfile'
import { Logo } from './logo'

export const Header = () => {
  const { isError } = useMeQuery()

  if (!isError) {
    return <Navigate to={ROUTES.home} />
  }

  return (
    <header className={s.header}>
      <div className={clsx(s.container, 'container')}>
        <Logo to={ROUTES.home} />
        {isError ? (
          <Button variant={'secondary'}>
            <Link to={ROUTES.signIn}>Sign In</Link>
          </Button>
        ) : (
          <HeaderProfile />
        )}
      </div>
    </header>
  )
}
