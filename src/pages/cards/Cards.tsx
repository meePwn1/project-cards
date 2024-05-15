import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { BackToPage } from '@/components/back-to-page'
import { CardsMoreDropdown, CardsTable, CreateNewCard, EmptyCards } from '@/components/cards/ui'
import { DeckCover } from '@/components/cards/ui/deck-cover/DeckCover'
import { Page } from '@/components/layout'
import { Button, TextField, Typography } from '@/components/ui'
import { Spinner } from '@/components/ui/spinner'
import { useGetCardsQuery, useGetDeckByIdQuery, useMeQuery } from '@/services'

import s from './Cards.module.scss'

export const Cards = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const { deckId } = useParams()

  // queries
  const { data: me } = useMeQuery()
  const { data: cards } = useGetCardsQuery({ id: deckId || '' })
  const { data: deck } = useGetDeckByIdQuery({ id: deckId || '' })

  const isMyDeck = me?.id === deck?.userId
  const isEmptyDeck = cards?.items?.length === 0

  if (isPageLoaded) {
    return (
      <div
        style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <Spinner size={50} />
      </div>
    )
  }

  return (
    <Page pt={24}>
      <BackToPage className={s.back} />
      <div className={s.pageHeader}>
        <div className={s.deckInfo}>
          <Typography variant={'h1'}>{deck?.name}</Typography>
          <CardsMoreDropdown deck={deck} isMyDeck={isMyDeck} />
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
