import { Link } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { Button } from '@/components/ui'

import { CreateNewCard } from '..'

type Props = {
  deckId?: string
  isMyDeck?: boolean
}

export const CardsHeaderButton = ({ deckId, isMyDeck }: Props) => {
  return isMyDeck ? (
    <CreateNewCard />
  ) : (
    <Button as={Link} to={ROUTES.LEARN(deckId)}>
      Learn to Pack
    </Button>
  )
}
