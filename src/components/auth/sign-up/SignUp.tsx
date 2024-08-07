import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { FormValues, formSchema } from '@/common/schemas'
import { Button, Card, FormTextField, Typography } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './SignUp.module.scss'

type Props = {
  onSubmit?: (data: FormValue) => void
}
type FormValue = Pick<FormValues, 'confirmPassword' | 'email' | 'password'>
const schema = formSchema
  .pick({ confirmPassword: true, email: true, password: true })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const SignUp = (props: Props) => {
  const {
    control,
    formState: { dirtyFields, errors, isSubmitting },
    handleSubmit,
  } = useForm<FormValue>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
  })

  const isFieldsNotEmpty = dirtyFields.confirmPassword && dirtyFields.password && dirtyFields.email

  const onHandleSubmit = (data: FormValue) => {
    props.onSubmit?.(data)
  }

  return (
    <Card className={s.root}>
      <Typography className={s.title} variant={'h1'}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onHandleSubmit)}>
        <FormTextField
          control={control}
          error={errors.email?.message}
          label={'Email'}
          name={'email'}
          placeholder={'Email'}
        />
        <FormTextField
          control={control}
          error={errors.password?.message}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          togglePassword
        />
        <FormTextField
          control={control}
          error={errors.confirmPassword?.message}
          label={'Confirm Password'}
          name={'confirmPassword'}
          placeholder={'Confirm Password'}
          togglePassword
        />
        <Button className={s.button} disabled={!isFieldsNotEmpty || isSubmitting} fullWidth>
          Sign Up
        </Button>
      </form>
      <div className={s.footer}>
        <Typography className={s.text} variant={'body2'}>
          Already have an account?
        </Typography>
        <Typography as={Link} to={ROUTES.SIGN_IN} variant={'linkForm'}>
          Sign In
        </Typography>
      </div>
    </Card>
  )
}
