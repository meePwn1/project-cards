import { useForm } from 'react-hook-form'

import { FormCheckbox, FormTextField } from '@/components/ui'
import { FileUploader } from '@/components/ui/file-uploader'

import s from './CreateDeckForm.module.scss'

export const CreateDeckForm = () => {
  const { control } = useForm()

  return (
    <form>
      <FormTextField
        className={s.formItem}
        control={control}
        label={'Name Pack'}
        name={'deck-name'}
      />
      <FileUploader className={s.formItem} fullWidth name={'file'} setFile={() => {}} />
      <FormCheckbox control={control} label={'Private deck'} name={'private'} />
    </form>
  )
}
