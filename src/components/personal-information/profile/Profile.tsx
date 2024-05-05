import { useState } from 'react'

import { Card, FileUploader, Typography } from '@/components/ui'
import { useUpdateUserDataMutation } from '@/services/auth'

import s from './Profile.module.scss'

import { ProfileAvatar } from '../profile-avatar'
import { ProfileInfo } from '../profile-info'
import { ProfileInfoEdit } from '../profile-info-edit'

export const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [updateUserData] = useUpdateUserDataMutation()

  const handleUpdateUserAvatar = (file: File) => {
    const formData = new FormData()

    formData.append('avatar', file)

    updateUserData(formData)
  }

  return (
    <Card className={s.profile}>
      <Typography className={s.title} variant={'h1'}>
        Personal Information
      </Typography>
      <ProfileAvatar editable>
        <FileUploader name={'file'} setFile={handleUpdateUserAvatar} variant={'icon'} />
      </ProfileAvatar>
      {isEditMode ? (
        <ProfileInfoEdit onEditModeDeactivate={setIsEditMode} />
      ) : (
        <ProfileInfo className={s.userInfo} onEditModeActivate={setIsEditMode} />
      )}
    </Card>
  )
}
