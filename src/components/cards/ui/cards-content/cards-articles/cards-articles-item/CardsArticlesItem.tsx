import { useState } from 'react'

import { TableColumn } from '@/common/types'
import { Card, Icon, Typography } from '@/components/ui'
import { Card as CardType } from '@/services'

import s from './CardsArticlesItem.module.scss'

import { DeleteCardModal } from '../../../delete-card/delete-card-modal'
import { EditCardModal } from '../../../edit-card/edit-card-modal'
import { getCardContent } from './lib/getCardContent'
import { getCardImageContent } from './lib/getCardImageContent'

type Props = {
  card?: CardType
  isMyDeck?: boolean
  titles?: TableColumn[]
}

export const CardsArticlesItem = ({ card, isMyDeck, titles }: Props) => {
  const [openEditCardModal, setOpenEditCardModal] = useState(false)
  const [openDeleteCardModal, setOpenDeleteCardModal] = useState(false)

  return (
    <Card className={s.article}>
      <div className={s.content}>
        {titles?.map(title => {
          const displayContent = getCardContent(title.key, card)
          const displayImageContent = getCardImageContent(title.key, card)

          return (
            <div className={s.field} key={title.key}>
              <Typography variant={'subtitle1'}>{title.title}</Typography>
              <Typography variant={'body2'}>{displayContent}</Typography>
              {displayImageContent}
            </div>
          )
        })}
      </div>
      {isMyDeck && (
        <div className={s.actions}>
          <EditCardModal card={card} open={openEditCardModal} setOpen={setOpenEditCardModal} />
          <DeleteCardModal
            cardId={card?.id}
            open={openDeleteCardModal}
            setOpen={setOpenDeleteCardModal}
          />
          <button onClick={() => setOpenEditCardModal(true)}>
            <Icon name={'common/edit'} />
          </button>
          <button onClick={() => setOpenDeleteCardModal(true)}>
            <Icon name={'common/trash'} />
          </button>
        </div>
      )}
    </Card>
  )
}
