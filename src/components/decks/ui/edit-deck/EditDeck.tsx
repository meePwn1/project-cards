import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button, Icon, Modal } from '@/components/ui'
import { useUpdateDeckMutation } from '@/services/decks'

import { CreateDeckForm } from '../forms/create-deck-form'

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
      <Modal onOpenChange={setOpen} open={open} title={'Edit deck'}>
        <CreateDeckForm
          isLoading={isLoading}
          onSubmit={handleSubmit}
          setOpen={setOpen}
          submitText={'Update deck'}
        />
      </Modal>
      <Button onClick={() => setOpen(true)} variant={'icon'}>
        <Icon name={'common/edit'} size={20} />
      </Button>
    </>
  )
}
