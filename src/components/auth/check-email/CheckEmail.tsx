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
      <div>
        <img alt={'check email icon'} src={''} />
      </div>
      <Typography className={s.text} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button as={'a'} className={s.button} fullWidth href={'#'} type={'submit'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
