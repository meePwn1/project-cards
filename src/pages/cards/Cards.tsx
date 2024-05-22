import { Link, useParams } from 'react-router-dom'

import { PARAMS, ROUTES } from '@/common/constants'
import { SortType } from '@/common/types'
import { getSortString } from '@/common/utils'
import { BackToPage } from '@/components/back-to-page'
import { CardsMoreDropdown, CardsTable, CreateNewCard, EmptyCards } from '@/components/cards/ui'
import { DeckCover } from '@/components/cards/ui/deck-cover'
import { Page } from '@/components/layout'
import { Button, LinearLoader, Pagination, TextField, Typography } from '@/components/ui'
import { useGetCardsQuery, useGetDeckByIdQuery, useMeQuery } from '@/services'

import s from './Cards.module.scss'

import { PER_PAGE, useCardsQueryParams } from './lib'

const perPageOptions = [5, 10, 15]

export const Cards = () => {
  const { deckId } = useParams()

  const { page, perPage, queryParams, question, searchParams, setSearchParams, sort } =
    useCardsQueryParams({ deckId })

  // queries
  const { data: me, isLoading: isMeLoading } = useMeQuery()
  const { data: deck, isLoading: isDeckLoading } = useGetDeckByIdQuery({ id: deckId || '' })
  const { data: cards, isLoading: isCardsLoading } = useGetCardsQuery(queryParams)

  const isMyDeck = me?.id === deck?.userId
  const isEmptyDeck = cards?.items?.length === 0

  if (isMeLoading || isCardsLoading || isDeckLoading) {
    return <LinearLoader />
  }

  const handlePageChange = (currentPage: number) => {
    if (currentPage > 1) {
      searchParams.set(PARAMS.PAGE, currentPage.toString())
    } else {
      searchParams.delete(PARAMS.PAGE)
    }
    setSearchParams(searchParams)
  }

  const handlePerPageChange = (perPage: number) => {
    if (perPage !== PER_PAGE) {
      searchParams.set(PARAMS.PER_PAGE, perPage.toString())
    } else {
      searchParams.delete(PARAMS.PER_PAGE)
    }
    setSearchParams(searchParams)
  }

  const handleQuestionChange = (question: string) => {
    if (question !== '') {
      searchParams.set(PARAMS.SEARCH, question)
    } else {
      searchParams.delete(PARAMS.SEARCH)
    }
    setSearchParams(searchParams)
  }

  const handleSortChange = (sort: SortType) => {
    const sortString = getSortString(sort)

    if (sortString) {
      searchParams.set(PARAMS.SORTING, sortString)
    } else {
      searchParams.delete(PARAMS.SORTING)
    }
    setSearchParams(searchParams)
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
      <TextField
        className={s.search}
        onValueChange={handleQuestionChange}
        placeholder={'Search by question'}
        search
        value={question}
      />
      {isEmptyDeck ? (
        <EmptyCards isMyDeck={isMyDeck} />
      ) : (
        <>
          <CardsTable
            cards={cards?.items}
            isMyDeck={isMyDeck}
            onSort={handleSortChange}
            sort={sort}
          />
        </>
      )}
      {cards?.pagination.totalItems && cards.pagination.totalPages > 1 && (
        <Pagination
          className={s.pagination}
          count={cards.pagination.totalPages}
          onPageChange={handlePageChange}
          onPerPageChange={handlePerPageChange}
          page={page}
          perPage={perPage}
          perPageOptions={perPageOptions}
        />
      )}
    </Page>
  )
}
