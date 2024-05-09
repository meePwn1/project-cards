import { useState } from 'react'

import { Button, FileUploader, FormCheckbox, FormTextField } from '@/components/ui'
import { ImageCropper, ImagePreviewData } from '@/components/ui/image-cropper'

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
  const [croppedImageData, setCroppedImageData] = useState<ImagePreviewData>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const { control, errors, handleSubmit, onHandleSubmit } = useCreateDeckForm(
    onSubmit,
    croppedImageData?.blob
  )

  const handleCancelClick = () => {
    setOpen?.(false)
  }
  const handleSetImageUrl = (dataUrl: string) => {
    setImgSrc(dataUrl)
    setModalOpen(true)
  }

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <ImageCropper
        imgSrc={imgSrc}
        open={modalOpen}
        setCroppedImageData={setCroppedImageData}
        setOpenModal={setModalOpen}
      />
      {croppedImageData && (
        <img alt={'Upload'} src={croppedImageData.url} style={{ maxWidth: '100%' }} />
      )}
      <FileUploader setImageUrl={handleSetImageUrl} text={'Upload file'} />
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
