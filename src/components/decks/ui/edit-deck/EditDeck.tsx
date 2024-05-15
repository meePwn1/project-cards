import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button, Icon } from '@/components/ui'
import { DeckById, useUpdateDeckMutation } from '@/services/decks'

import { EditDeckModal } from '../modals/edit-deck-modal'

type Props = {
  deck: DeckById
}

export const EditDeck = ({ deck }: Props) => {
  const [open, setOpen] = useState(false)
  const [updateDeck, { isLoading }] = useUpdateDeckMutation()

  const handleSubmit = (data: FormData) => {
    updateDeck({ data, id: deck?.id ?? '' })
      .unwrap()
      .then(() => {
        setOpen(false)
        toast.success('Deck updated successfully')
      })
  }

  return (
    <>
      <EditDeckModal
        deck={deck}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        open={open}
        setOpen={setOpen}
      />
      <Button onClick={() => setOpen(true)} variant={'icon'}>
        <Icon name={'common/edit'} size={20} />
      </Button>
    </>
  )
}
