import { useState } from 'react'

import { Button, Modal, Typography } from '@/components/ui'

import { CreateDeckForm } from '../forms/create-deck-form'

export const CreateNewDeck = () => {
  const [open, setOpen] = useState(false)
  const handleSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <>
      <Modal onOpenChange={setOpen} open={open} title={'Add New Deck'}>
        <CreateDeckForm onSubmit={handleSubmit} setOpen={setOpen} />
      </Modal>
      <Button onClick={() => setOpen(true)}>
        <Typography variant={'subtitle2'}>Add New Deck</Typography>
      </Button>
    </>
  )
}
