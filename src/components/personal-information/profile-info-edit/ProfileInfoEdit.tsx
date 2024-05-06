import { useForm } from 'react-hook-form'

import { FormValues, formSchema } from '@/common/schemas'
import { Button, FormTextField } from '@/components/ui'
import { useUpdateUserDataMutation } from '@/services/auth/auth.service'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'

import s from './ProfileInfoEdit.module.scss'

type Props = {
  className?: string
  onEditModeDeactivate: (value: boolean) => void
}
type FormValue = Pick<FormValues, 'username'>
const schema = formSchema.pick({ username: true })

export const ProfileInfoEdit = ({ className, onEditModeDeactivate }: Props) => {
  const {
    control,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm<FormValue>({
    defaultValues: { username: '' },
    resolver: zodResolver(schema),
  })

  const [updateUserData] = useUpdateUserDataMutation()

  const handleUpdateUsername = (data: FormValue) => {
    const formData = new FormData()

    formData.append('name', data.username)
    updateUserData(formData)
      .unwrap()
      .then(() => isValid && onEditModeDeactivate?.(false))
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
        <div className={s.buttons}>
          <Button disabled={isSubmitting} type={'submit'}>
            Save Changes
          </Button>
          <Button onClick={() => onEditModeDeactivate(false)} variant={'secondary'}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
