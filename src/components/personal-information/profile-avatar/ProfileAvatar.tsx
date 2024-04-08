import { Avatar, Button, Icon } from '@/components/ui'
import clsx from 'clsx'

import s from './ProfileAvatar.module.scss'
type Props = {
  className?: string
  editable?: boolean
}
export const ProfileAvatar = ({ className, editable = false }: Props) => {
  return (
    <div className={clsx(s.profileAvatar, className)}>
      <Avatar size={96} />
      {!editable && (
        <Button className={s.editButton} variant={'secondary'}>
          <Icon name={'common/edit'} size={16} />
        </Button>
      )}
    </div>
  )
}
