import { useForm } from 'react-hook-form'

import { formSchema } from '@/common/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = formSchema.pick({ answer: true, question: true })

type FormValues = z.infer<typeof schema>

export const useCreateCardForm = (
  onSubmit?: (data: FormData) => void,
  questionImg?: Blob | null,
  answerImg?: Blob | null,
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
    watch('answer') === defaultValues?.answer &&
    watch('question') === defaultValues?.question &&
    questionImg === null &&
    answerImg === null

  const onHandleSubmit = (data: FormValues) => {
    const form = new FormData()

    questionImg && form.append('questionImg', questionImg ?? '')
    answerImg && form.append('answerImg', answerImg ?? '')
    form.append('question', data.question)
    form.append('answer', data.answer)
    onSubmit?.(form)
  }

  return { control, errors, handleSubmit, isDisabled, onHandleSubmit }
}
