import { useState } from 'react'

import { Card, Typography } from '@/components/ui'

import s from './Profile.module.scss'

import { ProfileAvatar } from '../profile-avatar'
import { ProfileInfo } from '../profile-info'
import { ProfileInfoEdit } from '../profile-info-edit'

export const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <Card className={s.profile}>
      <Typography className={s.title} variant={'h1'}>
        Personal Information
      </Typography>
      <ProfileAvatar className={s.avatar} editable={isEditMode} />
      {isEditMode ? (
        <ProfileInfoEdit onEditModeDeactivate={setIsEditMode} />
      ) : (
        <ProfileInfo className={s.userInfo} onEditModeActivate={setIsEditMode} />
      )}
    </Card>
  )
}
