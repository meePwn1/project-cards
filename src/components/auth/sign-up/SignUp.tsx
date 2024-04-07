import { useForm } from 'react-hook-form'

import { FormValues, schema } from '@/common/schemas'
import { Button, Card, FormTextField, Typography } from '@/components/ui'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './SignUp.module.scss'

type Props = {
  onSubmit?: (data: FormValues) => void
}

export const SignUp = (props: Props) => {
  const {
    control,
    formState: { errors, isDirty, isSubmitting },
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
        <Button className={s.button} disabled={!isDirty || isSubmitting} fullWidth>
          Sign Up
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
