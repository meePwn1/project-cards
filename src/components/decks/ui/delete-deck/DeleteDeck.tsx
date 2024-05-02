import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button, Dialog, Icon } from '@/components/ui'
import { useDeleteDeckMutation } from '@/services/decks'

type Props = {
  deckName?: string
  id?: string
}
export const DeleteDeck = ({ deckName, id }: Props) => {
  const [open, setOpen] = useState(false)
  const [deleteDeck, { isLoading }] = useDeleteDeckMutation()

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleDeleteDeck = () => {
    deleteDeck({ id: id ?? '' })
      .unwrap()
      .then(() => {
        setOpen(false)
        toast.success(`${deckName} deleted successfully`)
      })
  }

  return (
    <>
      <Dialog
        buttonText={'Delete deck'}
        isLoading={isLoading}
        onConfirm={handleDeleteDeck}
        onOpenChange={setOpen}
        open={open}
        title={'Delete deck'}
      >
        Do you really want to remove <b>{deckName}</b>? <br />
        All cards will be deleted.
      </Dialog>
      <Button onClick={handleOpenDialog} variant={'icon'}>
        <Icon name={'common/trash'} size={20} />
      </Button>
    </>
  )
}
