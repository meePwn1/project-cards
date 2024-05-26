import { Link } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { useBreakpoint } from '@/common/hooks'
import { Button } from '@/components/ui'

import { CreateNewCard } from '..'

type Props = {
  deckId?: string
  isMyDeck?: boolean
}

export const CardsHeaderButton = ({ deckId, isMyDeck }: Props) => {
  const matches = useBreakpoint(479.98)

  return isMyDeck ? (
    <CreateNewCard matches={matches} />
  ) : (
    <Button as={Link} fullWidth={matches} to={ROUTES.LEARN(deckId)}>
      Learn to Pack
    </Button>
  )
}
