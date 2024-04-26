import { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'

import { Dialog, FormTextField } from '@/components/ui'
type Props = {} & ComponentProps<typeof Dialog>
export const CreateNewDeckModal = (props: Props) => {
  const { control } = useForm()

  return (
    <Dialog {...props}>
      <form>
        <FormTextField control={control} name={'pack-name'} />
      </form>
    </Dialog>
  )
}
