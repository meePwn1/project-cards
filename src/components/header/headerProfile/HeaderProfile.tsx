import { router } from '@/app/router'
import { ROUTES } from '@/common/constants'
import {
  Avatar,
  DropdownMenu,
  DropdownMenuItemWithIcon,
  DropdownMenuLabel,
  Icon,
  Typography,
} from '@/components/ui'
import { useLogoutMutation, useMeQuery } from '@/services/auth/auth.service'

import s from './HeaderProfile.module.scss'

export const HeaderProfile = () => {
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()

  const handleLogout = () => {
    logout()
  }
  const trigger = <Avatar size={36} src={data?.avatar} />

  return (
    <div className={s.headerProfile}>
      <Typography className={s.username} variant={'subtitle1'}>
        {data?.name}
      </Typography>
      <DropdownMenu className={s.dropdown} trigger={trigger}>
        <DropdownMenuLabel icon={trigger}>
          <div>
            <Typography variant={'subtitle2'}> {data?.name}</Typography>
            <Typography variant={'caption'}> {data?.email}</Typography>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItemWithIcon
          icon={<Icon name={'common/edit'} size={16} />}
          onClick={() => router.navigate(ROUTES.PROFILE)}
          text={'My Profile'}
        />
        <DropdownMenuItemWithIcon
          icon={<Icon name={'common/trash'} size={16} />}
          onClick={handleLogout}
          text={'Sign Out'}
        />
      </DropdownMenu>
    </div>
  )
}
