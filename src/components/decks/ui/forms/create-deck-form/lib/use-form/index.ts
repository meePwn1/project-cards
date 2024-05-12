import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  isPrivate: z.boolean(),
  name: z.string().min(3).max(30),
})

type formValues = z.infer<typeof schema>

export const useCreateDeckForm = (onSubmit?: (data: FormData) => void, img?: Blob | null) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<formValues>({
    defaultValues: {
      isPrivate: false,
      name: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(schema),
  })

  const onHandleSubmit = (data: formValues) => {
    const form = new FormData()

    form.append('cover', img ?? '')
    form.append('isPrivate', `${data.isPrivate}`)
    form.append('name', data.name)
    onSubmit?.(form)
  }

  return { control, errors, handleSubmit, onHandleSubmit, reset }
}
