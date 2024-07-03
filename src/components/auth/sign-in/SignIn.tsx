import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { FormValues, formSchema } from '@/common/schemas'
import { Button, Card, FormCheckbox, FormTextField, Typography } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './SignIn.module.scss'
type Props = {
  onSubmit?: (data: FormValue) => void
}
export type FormValue = Pick<FormValues, 'email' | 'password' | 'rememberMe'>
const schema = formSchema.pick({ email: true, password: true, rememberMe: true })

export const SignIn = (props: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormValue>({
    defaultValues: {
      email: 'test-zxc@gmail.com',
      password: 'sagesage',
    },
    mode: 'onBlur',
    resolver: zodResolver(schema),
  })

  const onHandleSubmit = (data: FormValue) => {
    props.onSubmit?.(data)
  }

  return (
    <Card className={s.root}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
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
        <FormTextField
          className={s.field}
          control={control}
          error={errors.password?.message}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          togglePassword
        />
        <FormCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
        />
        <Typography as={Link} className={s.forgot} to={ROUTES.RECOVER_PASSWORD} variant={'body2'}>
          Forgot Password?
        </Typography>
        <Button className={s.button} disabled={isSubmitting} fullWidth>
          Sign In
        </Button>
      </form>
      <div className={s.footer}>
        <Typography className={s.text} variant={'body2'}>
          Don&apos;t have an account?
        </Typography>
        <Typography as={Link} to={ROUTES.SIGN_UP} variant={'linkForm'}>
          Sign Up
        </Typography>
      </div>
    </Card>
  )
}
