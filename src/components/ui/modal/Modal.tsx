import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './Modal.module.scss'

import { Icon } from '../icon'
import { Typography } from '../typography'

type Props = {
  content: ReactNode
  footer: ReactNode
  title: string
  triggerButton: ReactNode
}
export const Modal = (props: Props) => {
  const { content, footer, title, triggerButton } = props

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{triggerButton}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          <div className={s.header}>
            <Typography variant={'h3'}>{title}</Typography>
            <Dialog.Close>
              <Icon name={'common/close'} />
            </Dialog.Close>
          </div>
          <div className={s.content}>{content}</div>
          <div className={s.footer}>{footer}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

{
  /* <div className={s.footer}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button variant={'primary'}>Add New Card</Button>
          </div> */
}
