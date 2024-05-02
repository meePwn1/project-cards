import { Navigate } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { Button, Icon, Typography } from '@/components/ui'
import { useLogoutMutation, useMeQuery } from '@/services/auth/auth.service'
import clsx from 'clsx'

import s from './ProfileInfo.module.scss'

type Props = {
  className?: string
  onEditModeActivate?: (value: boolean) => void
}
export const ProfileInfo = ({ className, onEditModeActivate }: Props) => {
  const { data } = useMeQuery()

  const [logout] = useLogoutMutation()

  const handleLogOut = () => {
    logout()
      .unwrap()
      .then(() => {
        return <Navigate to={ROUTES.signIn} />
      })
  }
  const handleEditMode = () => {
    onEditModeActivate?.(true)
  }

  return (
    <div className={clsx(s.profileInfo, className)}>
      <div className={s.username}>
        <Typography variant={'h2'}>{data?.name}</Typography>
        <button className={s.editButton} onClick={handleEditMode} type={'button'}>
          <Icon name={'common/edit'} size={16} />
        </button>
      </div>
      <Typography className={s.email} variant={'body2'}>
        {data?.email}
      </Typography>
      <Button onClick={handleLogOut} type={'button'} variant={'secondary'}>
        <Icon name={'common/log-out'} />
        Logout
      </Button>
    </div>
  )
}
