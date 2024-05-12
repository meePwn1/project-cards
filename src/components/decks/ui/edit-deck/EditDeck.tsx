import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button, Icon } from '@/components/ui'
import { useUpdateDeckMutation } from '@/services/decks'

import { EditDeckModal } from '../modals/edit-deck-modal'

type Props = { id?: string }

export const EditDeck = ({ id }: Props) => {
  const [open, setOpen] = useState(false)
  const [updateDeck, { isLoading }] = useUpdateDeckMutation()

  const handleSubmit = (data: FormData) => {
    updateDeck({ data, id: id ?? '' })
      .unwrap()
      .then(() => {
        setOpen(false)
        toast.success('Deck updated successfully')
      })
  }

  return (
    <>
      <EditDeckModal isLoading={isLoading} onSubmit={handleSubmit} open={open} setOpen={setOpen} />
      <Button onClick={() => setOpen(true)} variant={'icon'}>
        <Icon name={'common/edit'} size={20} />
      </Button>
    </>
  )
}
