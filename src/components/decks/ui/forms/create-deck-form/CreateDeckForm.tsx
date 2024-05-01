import { useState } from 'react'

import { FileUploaderWithPreview } from '@/components/file-uploader-with-preview'
import { Button, FormCheckbox, FormTextField } from '@/components/ui'

import s from './CreateDeckForm.module.scss'

import { useCreateDeckForm } from './lib/use-form'

type Props = {
  isLoading?: boolean
  onSubmit: (data: FormData) => void
  setOpen(value: boolean): void
}

export const CreateDeckForm = ({ isLoading, onSubmit, setOpen }: Props) => {
  const [img, setImg] = useState<File | null>(null)
  const { control, errors, handleSubmit, onHandleSubmit } = useCreateDeckForm(onSubmit, img)

  const handleCancelClick = () => {
    setImg(null)
    setOpen(false)
  }

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <FileUploaderWithPreview img={img} setImg={setImg} />
      <FormTextField
        className={s.formItem}
        control={control}
        error={errors.name?.message}
        label={'Name Pack'}
        name={'name'}
      />
      <FormCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
      <div className={s.buttons}>
        <Button onClick={handleCancelClick} type={'button'} variant={'secondary'}>
          Cancel
        </Button>
        <Button isLoading={isLoading} type={'submit'}>
          Add New Pack
        </Button>
      </div>
    </form>
  )
}
