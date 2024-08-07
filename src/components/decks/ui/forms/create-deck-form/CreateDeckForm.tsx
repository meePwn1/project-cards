import { useState } from 'react'

import { FileUploaderWithImageCropper } from '@/components/file-uploader-with-image-cropper/FileUploaderWithImageCropper'
import { Button, FormCheckbox, FormTextField, Icon } from '@/components/ui'
import { CroppedImageData } from '@/components/ui/image-cropper'
import { DeckById } from '@/services/decks'

import s from './CreateDeckForm.module.scss'

import { useCreateDeckForm } from './lib/use-form'

type Props = {
  deck?: DeckById
  isLoading?: boolean
  onSubmit?: (data: FormData) => void
  setOpen?: (value: boolean) => void
  submitText?: string
}

export const CreateDeckForm = ({ deck, isLoading, onSubmit, setOpen, submitText }: Props) => {
  const [croppedImageData, setCroppedImageData] = useState<CroppedImageData>(() =>
    deck?.cover
      ? {
          blob: null,
          url: deck?.cover,
        }
      : null
  )
  const { control, errors, handleSubmit, isDisabled, onHandleSubmit } = useCreateDeckForm(
    onSubmit,
    croppedImageData?.blob || null,
    {
      isPrivate: deck?.isPrivate ?? false,
      name: deck?.name ?? '',
    }
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
          <Button fullWidth type={'button'} variant={'secondary'}>
            <Icon name={'common/edit'} /> {croppedImageData?.url ? 'Change image' : 'Upload image'}
          </Button>
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
        <Button disabled={isDisabled} isLoading={isLoading} type={'submit'}>
          {submitText ?? 'Send'}
        </Button>
      </div>
    </form>
  )
}
