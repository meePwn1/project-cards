import { useState } from 'react'

import { Button, Icon } from '@/components/ui'

import { DeleteCardModal } from './delete-card-modal'

type Props = {
  cardId?: string
}

export const DeleteCard = ({ cardId }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <DeleteCardModal cardId={cardId} open={open} setOpen={setOpen} />
      <Button onClick={() => setOpen(true)} type={'button'} variant={'icon'}>
        <Icon name={'common/trash'} size={20} />
      </Button>
    </>
  )
}
