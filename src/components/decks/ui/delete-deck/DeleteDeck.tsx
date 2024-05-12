import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button, Icon } from '@/components/ui'
import { useDeleteDeckMutation } from '@/services/decks'

import { DeleteDeckModal } from '../modals/delete-deck-modal'

type Props = {
  deckName: string
  id?: string
}
export const DeleteDeck = ({ deckName, id }: Props) => {
  const [open, setOpen] = useState(false)
  const [deleteDeck, { isLoading }] = useDeleteDeckMutation()

  const handleDeleteDeck = () => {
    deleteDeck({ id: id ?? '' })
      .unwrap()
      .then(() => {
        setOpen?.(false)
        toast.success(`${deckName} deleted successfully`)
      })
  }
  const handleOpenDialog = () => {
    setOpen(true)
  }

  return (
    <>
      <DeleteDeckModal
        deckName={deckName}
        isLoading={isLoading}
        onConfirm={handleDeleteDeck}
        open={open}
        setOpen={setOpen}
      />
      <Button onClick={handleOpenDialog} variant={'icon'}>
        <Icon name={'common/trash'} size={20} />
      </Button>
    </>
  )
}
