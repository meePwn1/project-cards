import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  isPrivate: z.boolean(),
  name: z.string().min(3).max(30),
})

type FormValues = z.infer<typeof schema>

export const useCreateDeckForm = (
  onSubmit?: (data: FormData) => void,
  img?: Blob | null,
  defaultValues?: FormValues
) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormValues>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(schema),
  })

  const isDisabled =
    watch('isPrivate') === defaultValues?.isPrivate &&
    watch('name') === defaultValues?.name &&
    img === null

  const onHandleSubmit = (data: FormValues) => {
    const form = new FormData()

    img && form.append('cover', img ?? '')
    form.append('isPrivate', `${data.isPrivate}`)
    form.append('name', data.name)
    onSubmit?.(form)
  }

  return { control, errors, handleSubmit, isDisabled, onHandleSubmit }
}
