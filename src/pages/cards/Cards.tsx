import { Link, useParams } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { BackToPage } from '@/components/back-to-page'
import { CardsMoreDropdown, CardsTable, CreateNewCard, EmptyCards } from '@/components/cards/ui'
import { DeckCover } from '@/components/cards/ui/deck-cover/DeckCover'
import { Page } from '@/components/layout'
import { Button, TextField, Typography } from '@/components/ui'
import { LinearLoader } from '@/components/ui/linear-loader'
import { useGetCardsQuery, useGetDeckByIdQuery, useMeQuery } from '@/services'

import s from './Cards.module.scss'

export const Cards = () => {
  const { deckId } = useParams()

  // queries
  const { data: me, isLoading: isMeLoading } = useMeQuery()
  const { data: cards, isLoading: isCardsLoading } = useGetCardsQuery({ id: deckId || '' })
  const { data: deck, isLoading: isDeckLoading } = useGetDeckByIdQuery({ id: deckId || '' })

  const isMyDeck = me?.id === deck?.userId
  const isEmptyDeck = cards?.items?.length === 0

  if (isMeLoading || isCardsLoading || isDeckLoading) {
    return <LinearLoader />
  }

  return (
    <Page pt={24}>
      <BackToPage className={s.back} />
      {window.innerWidth < 768 && <div>asds</div>}
      <div className={s.pageHeader}>
        <div className={s.deckInfo}>
          <Typography variant={'h1'}>{deck?.name}</Typography>
          {isMyDeck && <CardsMoreDropdown deck={deck} />}
        </div>
        {!isEmptyDeck &&
          (isMyDeck ? (
            <CreateNewCard />
          ) : (
            <Button as={Link} to={ROUTES.LEARN(deckId)}>
              Learn to Pack
            </Button>
          ))}
      </div>
      <DeckCover cover={deck?.cover} />
      {isEmptyDeck ? (
        <EmptyCards isMyDeck={isMyDeck} />
      ) : (
        <>
          <TextField className={s.search} placeholder={'Search by question'} search />
          <CardsTable cards={cards?.items} isMyDeck={isMyDeck} />
        </>
      )}
    </Page>
  )
}
