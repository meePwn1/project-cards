import { ReactNode } from 'react'

import { SORT_BY } from '@/common/constants'
import { Modal } from '@/components/ui'
import { Card } from '@/services'

import s from '../CardsArticlesItem.module.scss'

export const getCardImageContent = (key: null | string, card?: Card): ReactNode | null => {
  if (!key || !card) {
    return null
  }

  const contentMapping: Record<string, (card: Card) => ReactNode | null> = {
    [SORT_BY.ANSWER]: card =>
      card.answerImg && (
        <Modal
          trigger={
            <button className={s.cardImageButton}>
              <img alt={'answer image'} src={card.answerImg} />
            </button>
          }
          variant={'cover'}
        >
          <img alt={'answer image'} className={s.cover} src={card.answerImg} />
        </Modal>
      ),
    [SORT_BY.QUESTION]: card =>
      card.questionImg && (
        <Modal
          trigger={
            <button className={s.cardImageButton}>
              <img alt={'answer image'} src={card.questionImg} />
            </button>
          }
          variant={'cover'}
        >
          <img alt={'answer image'} className={s.cover} src={card.questionImg} />
        </Modal>
      ),
  }

  return contentMapping[key] ? contentMapping[key](card) : null
}
