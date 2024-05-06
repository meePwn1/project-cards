import { PARAMS } from '@/common/constants'
import { SortType } from '@/common/types'
import { getSortString } from '@/common/utils'
import { CreateNewDeck } from '@/components/decks/ui/create-new-deck'
import { DeckFilters } from '@/components/decks/ui/deck-filters'
import { DecksTable } from '@/components/decks/ui/decks-table'
import { Page } from '@/components/layout'
import { Pagination, Typography } from '@/components/ui'
import { useMeQuery } from '@/services/auth'
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/services/decks'

import s from './Decks.module.scss'

import { MAX_CARDS, PER_PAGE, useDecksQueryParams } from './lib'

const perPageOptions = [5, 10, 15]

export const Decks = () => {
  // queries
  const { data: minMaxCards } = useGetMinMaxCardsQuery()
  const { data: me } = useMeQuery()
  const {
    page,
    perPage,
    queryParams,
    search,
    searchParams,
    setSearchParams,
    sliderValues,
    sort,
    tabValue,
  } = useDecksQueryParams({
    me,
    minMaxCards,
  })
  const { data: decks, isFetching } = useGetDecksQuery(queryParams)

  // handlers
  const handleSortChange = (sort: SortType) => {
    const sortString = getSortString(sort)

    if (sortString) {
      searchParams.set(PARAMS.SORTING, sortString)
    } else {
      searchParams.delete(PARAMS.SORTING)
    }
    setSearchParams(searchParams)
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

  return (
    <Page>
      <div className={s.pageHeader}>
        <Typography variant={'h1'}>Decks list</Typography>
        <CreateNewDeck />
      </div>
      <DeckFilters
        maxCardsCount={minMaxCards?.max || MAX_CARDS}
        search={search}
        sliderValues={sliderValues}
        tabValue={tabValue}
      />
      <DecksTable
        decks={decks?.items}
        isLoading={isFetching}
        onSort={handleSortChange}
        sort={sort}
        userID={me?.id}
      />
      {decks?.pagination.totalItems && decks.pagination.totalPages > 1 && (
        <Pagination
          className={s.pagination}
          count={decks.pagination.totalPages}
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
