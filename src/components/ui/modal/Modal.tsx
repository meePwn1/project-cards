import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './Modal.module.scss'

import { ScrollArea } from '..'
import { Icon } from '../icon'
import { Typography } from '../typography'

type Props = {
  children?: ReactNode
  modal?: boolean
  onOpenChange?: (value: boolean) => void
  open?: boolean
  title?: string
  trigger?: ReactNode
}
export const Modal = (props: Props) => {
  const { children, modal = true, onOpenChange, open, title, trigger } = props

  return (
    <Dialog.Root modal={modal} onOpenChange={onOpenChange} open={open}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <div className={s.wrapper}>
          <Dialog.Content className={s.dialogContent} forceMount>
            <div className={s.header}>
              <Typography variant={'h3'}>{title}</Typography>
              <Dialog.Close className={s.closeButton}>
                <Icon className={s.closeIcon} name={'common/close'} />
              </Dialog.Close>
            </div>
            <ScrollArea className={s.scrollArea} mh={575}>
              <div className={s.content}>{children}</div>
            </ScrollArea>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
