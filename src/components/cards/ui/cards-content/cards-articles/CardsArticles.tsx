import { Card } from '@/services'

import s from './CardsArticles.module.scss'

import { columnsWithActions, columnsWithoutActions } from '../сards-table'
import { CardsArticlesItem } from './cards-articles-item'
type Props = {
  cards?: Card[]
  isMyDeck?: boolean
}

export const CardsArticles = ({ cards, isMyDeck }: Props) => {
  return (
    <div className={s.articles}>
      {cards?.map(card => (
        <CardsArticlesItem
          card={card}
          isMyDeck={isMyDeck}
          key={card.id}
          titles={isMyDeck ? columnsWithActions : columnsWithoutActions}
        />
      ))}
    </div>
  )
}
