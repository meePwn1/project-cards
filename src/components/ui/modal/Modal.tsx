import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './Modal.module.scss'

import { Button } from '../button'
import { Icon } from '../icon'
import { Typography } from '../typography'

type Props = {
  content: ReactNode
  title: string
  triggerButton: ReactNode
}
export const Modal = (props: Props) => {
  const { content, title, triggerButton } = props

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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

type ModalFooterProps = {
  onPrimaryButtonClick: () => void
  onSecondaryButtonClick?: () => void
  primaryButtonLabel: string
  secondaryButtonLabel?: string
}

export const ModalFooter = (props: ModalFooterProps) => {
  const { onPrimaryButtonClick, onSecondaryButtonClick, primaryButtonLabel, secondaryButtonLabel } =
    props

  return (
    <div className={s.footer}>
      {secondaryButtonLabel && onSecondaryButtonClick && (
        <Button onClick={onSecondaryButtonClick} variant={'secondary'}>
          {secondaryButtonLabel}
        </Button>
      )}
      <Button onClick={onPrimaryButtonClick} variant={'primary'}>
        {primaryButtonLabel}
      </Button>
    </div>
  )
}
