import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { formSchema } from '@/common/schemas'
import { FileUploaderWithImageCropper } from '@/components/file-uploader-with-image-cropper'
import { Button, FormTextField, Modal, Typography } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './CreateNewCard.module.scss'

const schema = formSchema.pick({ answer: true, question: true })

type FormValues = z.infer<typeof schema>

export const CreateNewCard = () => {
  const [open, setOpen] = useState(false)
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { answer: '', question: '' },
    resolver: zodResolver(schema),
  })

  return (
    <>
      <Modal onOpenChange={setOpen} open={open} title={'Add New Card'}>
        <form>
          <Typography mb={12} variant={'subtitle2'}>
            Question:
          </Typography>
          <FormTextField
            className={s.field}
            control={control}
            label={'Question'}
            name={'question'}
          />
          <FileUploaderWithImageCropper
            className={s.uploadButton}
            trigger={
              <Button fullWidth type={'button'} variant={'secondary'}>
                Upload Image
              </Button>
            }
          />
          <Typography mb={12} variant={'subtitle2'}>
            Answer:
          </Typography>
          <FormTextField className={s.field} control={control} label={'Answer'} name={'answer'} />
          <FileUploaderWithImageCropper
            className={s.uploadButton}
            trigger={
              <Button fullWidth type={'button'} variant={'secondary'}>
                Upload Image
              </Button>
            }
          />
          <div className={s.buttons}>
            <Button type={'button'} variant={'secondary'}>
              Cancel
            </Button>
            <Button type={'submit'} variant={'primary'}>
              Add New Card
            </Button>
          </div>
        </form>
      </Modal>
      <Button onClick={() => setOpen(true)}>Add New Card</Button>
    </>
  )
}
