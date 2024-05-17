import { useState } from 'react'

import { FileUploaderWithImageCropper } from '@/components/file-uploader-with-image-cropper'
import { Button, FormTextField, Typography } from '@/components/ui'
import { CroppedImageData } from '@/components/ui/image-cropper'
import { Card } from '@/services'

import s from './CreateNewCardForm.module.scss'

import { getTrigger } from './lib'
import { useCreateCardForm } from './useCreateCardForm'

type Props = {
  card?: Card
  isLoading?: boolean
  onSubmit?: (data: FormData) => void
  setOpen?: (value: boolean) => void
  submitText?: string
}

export const CreateNewCardForm = ({ card, isLoading, onSubmit, setOpen, submitText }: Props) => {
  const [croppedQuestionImageData, setCroppedQuestionImageData] = useState<CroppedImageData>(() => {
    return card?.questionImg ? { blob: null, url: card?.questionImg } : null
  })
  const [croppedAnswerImageData, setCroppedAnswerImageData] = useState<CroppedImageData>(() => {
    return card?.answerImg ? { blob: null, url: card?.answerImg } : null
  })

  const { control, errors, handleSubmit, isDisabled, onHandleSubmit } = useCreateCardForm(
    onSubmit,
    croppedQuestionImageData?.blob || null,
    croppedAnswerImageData?.blob || null,
    { answer: card?.answer ?? '', question: card?.question ?? '' }
  )

  const handleCancelClick = () => {
    setOpen?.(false)
  }

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <Typography mb={12} variant={'subtitle2'}>
        Question:
      </Typography>
      <FormTextField
        className={s.field}
        control={control}
        error={errors.question?.message}
        label={'Question'}
        name={'question'}
      />
      <FileUploaderWithImageCropper
        className={s.uploadButton}
        croppedImageData={croppedQuestionImageData}
        setCroppedImageData={setCroppedQuestionImageData}
        trigger={getTrigger(croppedQuestionImageData?.url)}
      />
      <Typography mb={12} variant={'subtitle2'}>
        Answer:
      </Typography>
      <FormTextField
        className={s.field}
        control={control}
        error={errors.answer?.message}
        label={'Answer'}
        name={'answer'}
      />
      <FileUploaderWithImageCropper
        className={s.uploadButton}
        croppedImageData={croppedAnswerImageData}
        setCroppedImageData={setCroppedAnswerImageData}
        trigger={getTrigger(croppedAnswerImageData?.url)}
      />
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
