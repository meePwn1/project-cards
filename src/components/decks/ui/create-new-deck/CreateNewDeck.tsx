import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button, Modal, Typography } from '@/components/ui'
import { useCreateDeckMutation } from '@/services/decks'

import { CreateDeckForm } from '../forms/create-deck-form'

export const CreateNewDeck = () => {
  const [open, setOpen] = useState(false)
  const [createDeck, { isLoading }] = useCreateDeckMutation()

  const handleSubmit = (data: FormData) => {
    createDeck(data)
      .unwrap()
      .then(() => {
        setOpen(false)
        toast.success('Deck created')
      })
  }

  return (
    <>
      <Modal onOpenChange={setOpen} open={open} title={'Add New Deck'}>
        <CreateDeckForm isLoading={isLoading} onSubmit={handleSubmit} setOpen={setOpen} />
      </Modal>
      <Button onClick={() => setOpen(true)}>
        <Typography variant={'subtitle2'}>Add New Deck</Typography>
      </Button>
    </>
  )
}
