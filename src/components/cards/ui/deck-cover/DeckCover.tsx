import { useState } from 'react'

import { Modal } from '@/components/ui'

import s from './DeckCover.module.scss'

type Props = {
  cover?: null | string
}

export const DeckCover = ({ cover }: Props) => {
  const [openCoverModal, setOpenCoverModal] = useState(false)

  return (
    <>
      <Modal onOpenChange={setOpenCoverModal} open={openCoverModal} variant={'cover'}>
        {cover && (
          <div className={s.coverContainer}>
            <img alt={'deck cover'} src={cover} />
          </div>
        )}
      </Modal>
      {cover && (
        <button className={s.cover} onClick={() => setOpenCoverModal(true)}>
          <img alt={'deck cover'} src={cover} />
        </button>
      )}
    </>
  )
}
