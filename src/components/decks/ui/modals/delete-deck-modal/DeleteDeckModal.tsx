import { Dialog } from '@/components/ui'

type Props = {
  deckName?: string
  isLoading?: boolean
  onConfirm?: () => void
  open?: boolean
  setOpen?: (value: boolean) => void
}

export const DeleteDeckModal = ({ deckName, isLoading, onConfirm, open, setOpen }: Props) => {
  return (
    <Dialog
      buttonText={'Delete deck'}
      isLoading={isLoading}
      onConfirm={onConfirm}
      onOpenChange={setOpen}
      open={open}
      title={'Delete deck'}
    >
      Do you really want to remove <b>{deckName}</b>? <br />
      All cards will be deleted.
    </Dialog>
  )
}
