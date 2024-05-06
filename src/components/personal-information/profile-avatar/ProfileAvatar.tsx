import { ReactNode } from 'react'

import { Avatar } from '@/components/ui'
import { useMeQuery } from '@/services/auth/auth.service'

import s from './ProfileAvatar.module.scss'
type Props = {
  children?: ReactNode
  className?: string
  editable?: boolean
  img?: string
}
export const ProfileAvatar = ({ children, className, editable = false, img }: Props) => {
  const { data } = useMeQuery()

  const avatar = img ? img : data?.avatar

  return (
    <div className={className}>
      <div className={s.profileAvatar}>
        <Avatar size={96} src={avatar} />
        {editable && <div className={s.editChildren}>{children}</div>}
      </div>
    </div>
  )
}
