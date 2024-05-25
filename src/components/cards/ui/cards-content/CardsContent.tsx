import { useSearchParams } from 'react-router-dom'

import { PARAMS } from '@/common/constants'
import { useBreakpoint } from '@/common/hooks'
import { SortType } from '@/common/types'
import { getSortString } from '@/common/utils'
import { Pagination, TextField } from '@/components/ui'
import { PER_PAGE } from '@/pages/cards/lib'
import { CardsResponse } from '@/services'

import s from './CardsContent.module.scss'

import { CardsArticles } from './cards-articles'
import { CardsTable } from './сards-table'

const perPageOptions = [5, 10, 15]

type Props = {
  cards?: CardsResponse
  isCardsFetching?: boolean
  isMyDeck?: boolean
  page?: number
  perPage?: number
  question?: string
  searchError?: string
  sort?: SortType
}

export const CardsContent = ({
  cards,
  isCardsFetching,
  isMyDeck,
  page,
  perPage,
  question,
  searchError,
  sort,
}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const windowWidth = useBreakpoint(991.98)

  // handlers
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
    <>
      <TextField
        className={s.search}
        error={searchError}
        onValueChange={handleQuestionChange}
        placeholder={'Search by question'}
        search
        value={question}
      />
      {windowWidth ? (
        <CardsTable
          cards={cards?.items}
          isLoading={isCardsFetching}
          isMyDeck={isMyDeck}
          onSort={handleSortChange}
          sort={sort}
        />
      ) : (
        <CardsArticles cards={cards?.items} isMyDeck={isMyDeck} />
      )}
      {cards && cards.pagination.totalPages > 1 && (
        <Pagination
          className={s.pagination}
          count={cards.pagination.totalPages}
          onPageChange={handlePageChange}
          onPerPageChange={handlePerPageChange}
          page={page || 1}
          perPage={perPage}
          perPageOptions={perPageOptions}
        />
      )}
    </>
  )
}
