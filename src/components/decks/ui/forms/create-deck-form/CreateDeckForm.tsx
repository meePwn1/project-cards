import { useState } from 'react'

<<<<<<< HEAD
import { Button, FormCheckbox, FormTextField } from '@/components/ui'
import { CroppedImageData } from '@/components/ui/image-cropper'
=======
import { FileUploaderWithImageCropper } from '@/components/file-uploader-with-image-cropper/FileUploaderWithImageCropper'
import { Button, FormCheckbox, FormTextField, Icon } from '@/components/ui'
import { CroppedImageData } from '@/components/ui/image-cropper'
>>>>>>> bdcff813d77df81c5091d799aba587d93906f06d

import s from './CreateDeckForm.module.scss'

import { useCreateDeckForm } from './lib/use-form'

type Props = {
  isLoading?: boolean
  onSubmit?: (data: FormData) => void
  setOpen?: (value: boolean) => void
  submitText?: string
}

export const CreateDeckForm = ({ isLoading, onSubmit, setOpen, submitText }: Props) => {
  const [imgSrc, setImgSrc] = useState('')
  const [croppedImageData, setCroppedImageData] = useState<CroppedImageData>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const { control, errors, handleSubmit, onHandleSubmit } = useCreateDeckForm(
    onSubmit,
    croppedImageData?.blob
  )

  const handleCancelClick = () => {
    setOpen?.(false)
  }

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <FileUploaderWithImageCropper
        croppedImageData={croppedImageData}
        setCroppedImageData={setCroppedImageData}
        trigger={
          <>
            <Icon name={'common/edit'} /> {croppedImageData?.url ? 'Change image' : 'Upload image'}
          </>
        }
      />
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
          {submitText ?? 'Send'}
        </Button>
      </div>
    </form>
  )
}
