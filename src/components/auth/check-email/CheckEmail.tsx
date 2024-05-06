import { Link } from 'react-router-dom'

import checkEmail from '@/assets/check-email.png'
import { ROUTES } from '@/common/constants'
import { Button, Card, Typography } from '@/components/ui'
import clsx from 'clsx'

import s from './CheckEmail.module.scss'
type Props = {
  className?: string
}
export const CheckEmail = ({ className }: Props) => {
  return (
    <Card className={clsx(s.root, className)}>
      <Typography className={s.title} variant={'h1'}>
        Check Email
      </Typography>
      <div className={s.image}>
        <img alt={'check email icon'} src={checkEmail} />
      </div>
      <Typography className={s.text} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button as={Link} className={s.button} fullWidth to={ROUTES.SIGN_IN}>
        Back to Sign In
      </Button>
    </Card>
  )
}
