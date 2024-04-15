import { ROUTES } from '@/common/constants'
import clsx from 'clsx'

import s from './Header.module.scss'

import { HeaderProfile } from './headerProfile'
import { Logo } from './logo'

export const Header = () => {
  const profileData = {}

  return (
    <header className={s.header}>
      <div className={clsx(s.container, 'container')}>
        <Logo to={ROUTES.home} />
        <HeaderProfile data={profileData} />
      </div>
    </header>
  )
}
