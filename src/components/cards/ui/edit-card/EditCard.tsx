import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button, Icon, Modal } from '@/components/ui'
import { Card, useUpdateCardMutation } from '@/services'

import { CreateNewCardForm } from '../create-new-card-form'

type Props = {
  card?: Card
}

export const EditCard = ({ card }: Props) => {
  const [open, setOpen] = useState(false)
  const [updateCard, { isLoading }] = useUpdateCardMutation()

  const handleSubmit = (data: FormData) => {
    updateCard({ data, id: card?.id || '' })
      .unwrap()
      .then(() => {
        setOpen(false)
        toast.success('Card updated successfully')
      })
  }

  return (
    <>
      <Modal onOpenChange={setOpen} open={open} title={'Edit Card'}>
        <CreateNewCardForm
          card={card}
          isLoading={isLoading}
          onSubmit={handleSubmit}
          setOpen={setOpen}
          submitText={'Update Card'}
        />
      </Modal>
      <Button onClick={() => setOpen(true)} type={'button'} variant={'icon'}>
        <Icon name={'common/edit'} size={20} />
      </Button>
    </>
  )
}
