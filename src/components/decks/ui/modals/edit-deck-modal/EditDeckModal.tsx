import { Modal } from '@/components/ui'

import { CreateDeckForm } from '../../forms/create-deck-form'

type Props = {
  isLoading?: boolean
  onSubmit?: (data: FormData) => void
  open?: boolean
  setOpen?: (value: boolean) => void
}

export const EditDeckModal = ({ isLoading, onSubmit, open, setOpen }: Props) => {
  return (
    <Modal onOpenChange={setOpen} open={open} title={'Edit deck'}>
      <CreateDeckForm
        isLoading={isLoading}
        onSubmit={onSubmit}
        setOpen={setOpen}
        submitText={'Update deck'}
      />
    </Modal>
  )
}
