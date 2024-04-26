import { useState } from 'react'

import imagePlaceholder from '@/assets/image-placeholder.png'
import { AspectRatio, Button, FormCheckbox, FormTextField } from '@/components/ui'
import { FileUploader } from '@/components/ui/file-uploader'
import clsx from 'clsx'

import s from './CreateDeckForm.module.scss'

import { useCreateDeckForm } from './lib/use-form'

type Props = {
  onSubmit: (data: FormData) => void
  setOpen(value: boolean): void
}

export const CreateDeckForm = ({ onSubmit, setOpen }: Props) => {
  const [img, setImg] = useState<File | null>(null)
  const [ratio, setRatio] = useState(13.8 / 8)
  const { control, errors, handleSubmit, onHandleSubmit, reset } = useCreateDeckForm(onSubmit, img)

  const handleCancelClick = () => {
    setImg(null)
    setOpen(false)
  }
  const handleDeleteFile = () => {
    setImg(null)
    setRatio(13.8 / 8)
  }

  const imgSrc = img && URL.createObjectURL(img)
  const fileUploaderText = img ? 'Change file' : 'Upload file'

  const image = new Image()

  if (imgSrc) {
    image.src = imgSrc
    image.onload = () => {
      const width = image.width
      const height = image.height

      setRatio(width / height)
    }
  }

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <AspectRatio className={s.imageWrapper} ratio={ratio}>
        {<img alt={'img'} className={s.image} src={imgSrc ?? imagePlaceholder} />}
      </AspectRatio>
      <div className={clsx(s.controlButtons, img && s.flex)}>
        {img && (
          <Button onClick={handleDeleteFile} type={'button'} variant={'secondary'}>
            Delete file
          </Button>
        )}
        <FileUploader fullWidth={!img} name={'file'} setFile={setImg} text={fileUploaderText} />
      </div>

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
        <Button type={'submit'}>Add New Pack</Button>
      </div>
    </form>
  )
}
