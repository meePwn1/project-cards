import { useSearchParams } from 'react-router-dom'

import { PARAMS, SORT_BY } from '@/common/constants'
import { useBreakpoint } from '@/common/hooks'
import { SortType } from '@/common/types'
import { getSortString } from '@/common/utils'
import { Pagination, Select, TextField } from '@/components/ui'
import { PER_PAGE } from '@/pages/cards/lib'
import { CardsResponse } from '@/services'

import s from './CardsContent.module.scss'

import { CardsArticles } from './cards-articles'
import { CardsTable } from './сards-table'

const perPageOptions = [5, 10, 15]
const SelectOptions = [
  {
    text: 'Last updated',
    value: SORT_BY.UPDATED,
  },
  {
    text: 'Added recently',
    value: SORT_BY.CREATED,
  },
  { text: 'More grade', value: SORT_BY.GRADE },
]

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
  const matches = useBreakpoint(991.98)

  // handlers
  const handlePageChange = (currentPage: number) => {
    if (currentPage > 1) {
      searchParams.set(PARAMS.PAGE, currentPage.toString())
    } else {
      searchParams.delete(PARAMS.PAGE)
    }
    window.scrollTo({ behavior: 'smooth', top: 100 })
    setSearchParams(searchParams)
  }

  const handlePerPageChange = (perPage: number) => {
    if (perPage !== PER_PAGE) {
      searchParams.set(PARAMS.PER_PAGE, perPage.toString())
      searchParams.set(PARAMS.PAGE, '1')
    } else {
      searchParams.delete(PARAMS.PER_PAGE)
    }
    window.scrollTo({ behavior: 'smooth', top: 100 })
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

  const handleSelectValueChange = (value: string) => {
    if (value !== SORT_BY.UPDATED) {
      searchParams.set(PARAMS.SORTING, `${value}-desc`)
    } else {
      searchParams.delete(PARAMS.SORTING)
    }
    setSearchParams(searchParams)
  }

  return (
    <>
      {matches && (
        <Select
          className={s.filter}
          defaultValue={SelectOptions[0].value}
          onValueChange={handleSelectValueChange}
          options={SelectOptions}
          value={sort?.sortBy || SORT_BY.UPDATED}
        />
      )}
      <TextField
        className={s.search}
        error={searchError}
        onValueChange={handleQuestionChange}
        placeholder={'Search by question'}
        search
        value={question}
      />
      {matches ? (
        <CardsArticles cards={cards?.items} isMyDeck={isMyDeck} />
      ) : (
        <CardsTable
          cards={cards?.items}
          isLoading={isCardsFetching}
          isMyDeck={isMyDeck}
          onSort={handleSortChange}
          sort={sort}
        />
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
