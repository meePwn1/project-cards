import { ReactNode } from 'react'

import s from './Dialog.module.scss'

import { Button, Modal } from '..'

type Props = {
  buttonText?: string
  children?: ReactNode
  isLoading?: boolean
  modal?: boolean
  onConfirm?: () => void
  onOpenChange?: (value: boolean) => void
  open?: boolean
  title?: string
  trigger?: ReactNode
}

export const Dialog = ({
  buttonText,
  children,
  isLoading,
  modal = true,
  onConfirm,
  onOpenChange,
  open,
  title,
  trigger,
}: Props) => {
  const handleCancelClick = () => {
    onOpenChange?.(false)
  }

  return (
    <>
      <Modal modal={modal} onOpenChange={onOpenChange} open={open} title={title} trigger={trigger}>
        <div className={s.content}>{children}</div>
        <div className={s.buttons}>
          <Button onClick={handleCancelClick} variant={'secondary'}>
            Cancel
          </Button>
          <Button isLoading={isLoading} onClick={onConfirm}>
            {buttonText || 'Confirm'}
          </Button>
        </div>
      </Modal>
    </>
  )
}
