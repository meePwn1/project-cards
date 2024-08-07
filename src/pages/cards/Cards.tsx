import { useParams } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { BackToPage } from '@/components/back-to-page'
import {
  CardsContent,
  CardsHeaderButton,
  CardsMoreDropdown,
  EmptyCards,
} from '@/components/cards/ui'
import { DeckCover } from '@/components/cards/ui/deck-cover'
import { Page } from '@/components/layout'
import { Typography } from '@/components/ui'
import { useGetCardsQuery, useGetDeckByIdQuery, useMeQuery } from '@/services'

import s from './Cards.module.scss'

import { useCardsQueryParams } from './lib'

export const Cards = () => {
  const { deckId } = useParams()

  const { page, perPage, queryParams, question, searchError, sort } = useCardsQueryParams()

  // queries
  const { data: me, isLoading: isMeLoading } = useMeQuery()
  const { data: deck, isLoading: isDeckLoading } = useGetDeckByIdQuery({ id: deckId || '' })
  const {
    data: cards,
    isFetching: isCardsFetching,
    isLoading: isCardsLoading,
  } = useGetCardsQuery({
    id: deckId || '',
    params: queryParams,
  })

  const isMyDeck = me?.id === deck?.userId
  const isEmptyDeck = cards?.items?.length === 0

  if (isMeLoading || isCardsLoading || isDeckLoading) {
    return null
  }

  return (
    <Page pt={24}>
      <BackToPage className={s.back} to={ROUTES.HOME} />
      <div className={s.pageHeader}>
        <div className={s.pageHeaderContent}>
          <div className={s.deckInfo}>
            <Typography variant={'h1'}>{deck?.name}</Typography>
            {isMyDeck && <CardsMoreDropdown deck={deck} />}
          </div>
          <DeckCover cover={deck?.cover} />
        </div>
        {!isEmptyDeck && <CardsHeaderButton deckId={deckId} isMyDeck={isMyDeck} />}
      </div>

      {isEmptyDeck ? (
        <EmptyCards isMyDeck={isMyDeck} />
      ) : (
        <CardsContent
          cards={cards}
          isCardsFetching={isCardsFetching}
          isMyDeck={isMyDeck}
          page={page}
          perPage={perPage}
          question={question}
          searchError={searchError}
          sort={sort}
        />
      )}
    </Page>
  )
}
