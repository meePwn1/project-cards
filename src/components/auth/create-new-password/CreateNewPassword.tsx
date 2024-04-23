import { useForm } from 'react-hook-form'

import { FormValues, formSchema } from '@/common/schemas'
import { Button, Card, FormTextField, Typography } from '@/components/ui'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CreateNewPassword.module.scss'
type Props = {
  onSubmit?: (data: FormValue) => void
}
type FormValue = Pick<FormValues, 'password'>
const schema = formSchema.pick({ password: true })

export const CreateNewPassword = (props: Props) => {
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
        Create new password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onHandleSubmit)}>
        <FormTextField
          className={s.field}
          control={control}
          error={errors.password?.message}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
        />

        <Typography className={s.text} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button className={s.button} disabled={isSubmitting} fullWidth type={'submit'}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
