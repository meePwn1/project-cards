import { useForm } from 'react-hook-form'

import { FormValues, formSchema } from '@/common/schemas'
import { Button, FormTextField } from '@/components/ui'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'

import s from './ProfileInfoEdit.module.scss'

type Props = {
  className?: string
  onEditModeDeactivate?: (value: boolean) => void
  onUpdateUsername?: (data: FormValue) => void
}
type FormValue = Pick<FormValues, 'username'>
const schema = formSchema.pick({ username: true })

export const ProfileInfoEdit = ({ className, onEditModeDeactivate, onUpdateUsername }: Props) => {
  const {
    control,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm<FormValue>({
    defaultValues: { username: '' },
    resolver: zodResolver(schema),
  })
  const handleUpdateUsername = (data: FormValue) => {
    onUpdateUsername?.(data)
  }
  const handleEditMode = () => {
    isValid && onEditModeDeactivate?.(false)
  }

  return (
    <div className={clsx(s.profileInfoEdit, className)}>
      <form onSubmit={handleSubmit(handleUpdateUsername)}>
        <DevTool control={control} />
        <FormTextField
          className={s.nicknameField}
          control={control}
          error={errors.username?.message}
          label={'Nickname'}
          name={'username'}
          placeholder={'Nickname'}
        />
        <Button disabled={isSubmitting} fullWidth onClick={handleEditMode} type={'submit'}>
          Save Changes
        </Button>
      </form>
    </div>
  )
}
