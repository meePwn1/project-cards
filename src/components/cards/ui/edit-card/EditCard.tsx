import { useState } from 'react'

import { Button, Icon } from '@/components/ui'
import { Card } from '@/services'

import { EditCardModal } from './edit-card-modal'

type Props = {
  card?: Card
}

export const EditCard = ({ card }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <EditCardModal card={card} open={open} setOpen={setOpen} />
      <Button onClick={() => setOpen(true)} type={'button'} variant={'icon'}>
        <Icon name={'common/edit'} size={20} />
      </Button>
    </>
  )
}
