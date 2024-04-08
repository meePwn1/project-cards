import { Button, Icon, Typography } from '@/components/ui'
import clsx from 'clsx'

import s from './ProfileInfo.module.scss'

type Props = {
  className?: string
  onEditModeActivate?: (value: boolean) => void
  onLogout?: () => void
}
export const ProfileInfo = ({ className, onEditModeActivate, onLogout }: Props) => {
  const handleLogOut = () => {
    onLogout?.()
  }
  const handleEditMode = () => {
    onEditModeActivate?.(true)
  }

  return (
    <div className={clsx(s.profileInfo, className)}>
      <div className={s.username}>
        <Typography variant={'h2'}>Ivan</Typography>
        <button className={s.editButton} onClick={handleEditMode} type={'button'}>
          <Icon name={'common/edit'} size={16} />
        </button>
      </div>
      <Typography className={s.email} variant={'body2'}>
        j&johnson@gmail.com
      </Typography>
      <Button onClick={handleLogOut} type={'button'} variant={'secondary'} withIcon>
        <Icon name={'common/log-out'} />
        Logout
      </Button>
    </div>
  )
}
