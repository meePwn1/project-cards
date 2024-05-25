import { ReactNode } from 'react'

import { SORT_BY } from '@/common/constants'
import { Rating } from '@/components/ui'
import { Card } from '@/services'

export const getCardContent = (key: null | string, card?: Card): ReactNode | null => {
  if (!key || !card) {
    return null
  }

  const contentMapping: Record<string, (card: Card) => ReactNode | null> = {
    [SORT_BY.ANSWER]: card => card.answer,
    [SORT_BY.GRADE]: card => <Rating readonly value={card.grade} />,
    [SORT_BY.QUESTION]: card => card.question,
    [SORT_BY.UPDATED]: card => new Date(card.updated).toLocaleDateString(),
  }

  return contentMapping[key] ? contentMapping[key](card) : null
}
