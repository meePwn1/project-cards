import { useForm } from 'react-hook-form'

import { FormValues, schema } from '@/common/schemas'
import { Button, Card, FormCheckbox, FormTextField, Typography } from '@/components/ui'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './SignIn.module.scss'
type Props = {
  onSubmit?: (data: FormValues) => void
}

export const SignIn = (props: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onHandleSubmit = (data: FormValues) => {
    props.onSubmit?.(data)
  }

  return (
    <Card className={s.root}>
      <DevTool control={control} />
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
        <Typography as={'a'} className={s.forgot} href={'#'} variant={'body2'}>
          Forgot Password?
        </Typography>
        <Button className={s.button} disabled={isSubmitting} fullWidth>
          Sign In
        </Button>
      </form>
      <div className={s.footer}>
        <Typography className={s.text} variant={'body2'}>
          Already have an account?
        </Typography>
        <Typography as={'a'} href={'#'} variant={'linkForm'}>
          Sign In
        </Typography>
      </div>
    </Card>
  )
}
