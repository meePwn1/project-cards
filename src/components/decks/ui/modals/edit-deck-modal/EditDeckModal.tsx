import { Modal } from '@/components/ui'
import { DeckById } from '@/services/decks'

import { CreateDeckForm } from '../../forms/create-deck-form'

type Props = {
  deck: DeckById
  isLoading?: boolean
  onSubmit?: (data: FormData) => void
  open?: boolean
  setOpen?: (value: boolean) => void
}

export const EditDeckModal = ({ deck, isLoading, onSubmit, open, setOpen }: Props) => {
  return (
    <Modal onOpenChange={setOpen} open={open} title={'Edit deck'}>
      <CreateDeckForm
        deck={deck}
        isLoading={isLoading}
        onSubmit={onSubmit}
        setOpen={setOpen}
        submitText={'Update deck'}
      />
    </Modal>
  )
}
