import {
  Avatar,
  DropdownMenu,
  DropdownMenuItemWithIcon,
  DropdownMenuLabel,
  Icon,
  Typography,
} from '@/components/ui'

import s from './HeaderProfile.module.scss'

type Props = {
  data?: any
}

export const HeaderProfile = ({}: Props) => {
  const trigger = <Avatar size={36} />

  return (
    <div className={s.headerProfile}>
      <Typography className={s.username} variant={'subtitle1'}>
        user
      </Typography>
      <DropdownMenu className={s.dropdown} trigger={trigger}>
        <DropdownMenuLabel icon={trigger}>
          <div>
            <Typography variant={'subtitle2'}>Deadpool</Typography>
            <Typography variant={'caption'}>j&johnson@gmail.com</Typography>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItemWithIcon
          icon={<Icon name={'common/edit'} size={16} />}
          text={'My Profile'}
        />
        <DropdownMenuItemWithIcon
          icon={<Icon name={'common/trash'} size={16} />}
          text={'Sign Out'}
        />
      </DropdownMenu>
    </div>
  )
}
