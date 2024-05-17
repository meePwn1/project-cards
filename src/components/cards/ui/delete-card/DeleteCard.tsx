import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button, Dialog, Icon } from '@/components/ui'
import { useDeleteCardMutation } from '@/services'

type Props = {
  cardId?: string
}

export const DeleteCard = ({ cardId }: Props) => {
  const [open, setOpen] = useState(false)
  const [deleteCard, { isLoading }] = useDeleteCardMutation()
  const handleDeleteCard = () => {
    deleteCard({ id: cardId ?? '' })
      .unwrap()
      .then(() => {
        setOpen(false)
        toast.success(`Card deleted successfully`)
      })
  }

  return (
    <>
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
      <Button onClick={() => setOpen(true)} type={'button'} variant={'icon'}>
        <Icon name={'common/trash'} size={20} />
      </Button>
    </>
  )
}
