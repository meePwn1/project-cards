import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { FormValues, formSchema } from '@/common/schemas'
import { Button, Card, FormTextField, Typography } from '@/components/ui'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './ForgotPassword.module.scss'
type Props = {
  onSubmit?: (data: FormValue) => void
}

export type FormValue = Pick<FormValues, 'email'>
const schema = formSchema.pick({ email: true })

export const ForgotPassword = (props: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormValue>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  })

  const onHandleSubmit = (data: FormValue) => {
    props.onSubmit?.(data)
  }

  return (
    <Card className={s.root}>
      <DevTool control={control} />
      <Typography className={s.title} variant={'h1'}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onHandleSubmit)}>
        <FormTextField
          className={s.field}
          control={control}
          error={errors.email?.message}
          label={'Email'}
          name={'email'}
          placeholder={'Email'}
        />
        <Typography className={s.text} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button disabled={isSubmitting} fullWidth type={'submit'}>
          Send Instructions
        </Button>
      </form>
      <div className={s.footer}>
        <Typography className={s.text} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Typography as={Link} to={ROUTES.SIGN_IN} variant={'linkForm'}>
          Try logging in
        </Typography>
      </div>
    </Card>
  )
}
