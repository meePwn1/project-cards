import { toast } from 'react-toastify'

import { Dialog } from '@/components/ui'
import { useDeleteCardMutation } from '@/services'

type Props = {
  cardId?: string
  open?: boolean
  setOpen?: (value: boolean) => void
}

export const DeleteCardModal = ({ cardId, open, setOpen }: Props) => {
  const [deleteCard, { isLoading }] = useDeleteCardMutation()

  const handleDeleteCard = () => {
    deleteCard({ id: cardId ?? '' })
      .unwrap()
      .then(() => {
        setOpen?.(false)
        toast.success(`Card deleted successfully`)
      })
  }

  return (
    <Dialog
      buttonText={'Delete card'}
      isLoading={isLoading}
      onConfirm={handleDeleteCard}
      onOpenChange={setOpen}
      open={open}
      title={'Delete card'}
    >
      Do you really want to remove the card?
    </Dialog>
  )
}
