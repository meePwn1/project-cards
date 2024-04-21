import { useState } from 'react'

import { Button, Dialog, Typography } from '@/components/ui'

import { CreateDeckForm } from '../forms/create-deck-form'

export const CreateNewDeck = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog onOpenChange={setOpen} open={open} title={'Add New Deck'}>
        <CreateDeckForm />
      </Dialog>
      <Button onClick={() => setOpen(true)}>
        <Typography variant={'subtitle2'}>Add New Deck</Typography>
      </Button>
    </>
  )
}
