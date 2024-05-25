import { toast } from 'react-toastify'

import { Modal } from '@/components/ui'
import { Card, useUpdateCardMutation } from '@/services'

import { CreateNewCardForm } from '../../create-new-card-form'

type Props = {
  card?: Card
  open?: boolean
  setOpen?: (value: boolean) => void
}

export const EditCardModal = ({ card, open, setOpen }: Props) => {
  const [updateCard, { isLoading }] = useUpdateCardMutation()

  const handleSubmit = (data: FormData) => {
    updateCard({ data, id: card?.id || '' })
      .unwrap()
      .then(() => {
        setOpen?.(false)
        toast.success('Card updated successfully')
      })
  }

  return (
    <Modal onOpenChange={setOpen} open={open} title={'Edit Card'}>
      <CreateNewCardForm
        card={card}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        setOpen={setOpen}
        submitText={'Update Card'}
      />
    </Modal>
  )
}
