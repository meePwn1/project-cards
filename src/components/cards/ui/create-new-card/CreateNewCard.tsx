import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button, Modal } from '@/components/ui'
import { useCreateCardMutation } from '@/services'

import { CreateNewCardForm } from '../create-new-card-form'

type Props = {
  matches?: boolean
}
export const CreateNewCard = ({ matches }: Props) => {
  const { deckId } = useParams()
  const [open, setOpen] = useState(false)
  const [createCard, { isLoading }] = useCreateCardMutation()

  const handleSubmit = (data: FormData) => {
    createCard({ data, id: deckId || '' })
      .unwrap()
      .then(() => {
        setOpen(false)
        toast.success('Card created successfully')
      })
  }

  const handleOpenModal = () => {
    setOpen(true)
  }

  return (
    <>
      <Modal onOpenChange={setOpen} open={open} title={'Add New Card'}>
        <CreateNewCardForm
          isLoading={isLoading}
          onSubmit={handleSubmit}
          setOpen={setOpen}
          submitText={'Add New Card'}
        />
      </Modal>
      <Button fullWidth={matches} onClick={handleOpenModal}>
        Add New Card
      </Button>
    </>
  )
}
