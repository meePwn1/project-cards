import { Avatar, Button, Icon } from '@/components/ui'
import { useMeQuery } from '@/services/auth/auth.service'
import clsx from 'clsx'

import s from './ProfileAvatar.module.scss'
type Props = {
  className?: string
  editable?: boolean
}
export const ProfileAvatar = ({ className, editable = false }: Props) => {
  const { data } = useMeQuery()

  return (
    <div className={clsx(s.profileAvatar, className)}>
      <Avatar size={96} src={data?.avatar} />
      {!editable && (
        <Button className={s.editButton} variant={'secondary'}>
          <Icon name={'common/edit'} size={16} />
        </Button>
      )}
    </div>
  )
}
