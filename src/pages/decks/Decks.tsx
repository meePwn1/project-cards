import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/common/hooks/use-debounce'
import { getSortString } from '@/common/utils'
import { CreateNewDeck } from '@/components/decks/ui/create-new-deck'
import { DeckFilters } from '@/components/decks/ui/deck-filters'
import { DecksTable } from '@/components/decks/ui/decks-table'
import { Page } from '@/components/layout'
import { Pagination, Typography } from '@/components/ui'
import { SortType } from '@/components/ui/table-header'
import { useMeQuery } from '@/services/auth'
import { useGetDecksQuery } from '@/services/decks'

import s from './Decks.module.scss'

export const Decks = () => {
  const [sort, setSort] = useState<SortType | null>(null)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(5)
  const perPageOptions = [5, 10, 15, 20, 25, 30]

  const orderBy = getSortString(sort)

  const [searchParams] = useSearchParams()
  const debouncedValue = useDebounce<string>(searchParams.get('name') || '', 500)
  const debouncedCurrentPage = useDebounce(currentPage, 500)
  const params = Object.fromEntries(searchParams)
  const { data: decks, isFetching } = useGetDecksQuery({
    ...params,
    currentPage: debouncedCurrentPage,
    itemsPerPage: perPage,
    name: debouncedValue,
    orderBy,
  })
  const { data: me } = useMeQuery()

  useEffect(() => {
    setTotalPages(decks?.pagination.totalPages ?? 1)
    setCurrentPage(decks?.pagination.currentPage ?? 1)
    setPerPage(decks?.pagination.itemsPerPage ?? 5)
  }, [decks])

  return (
    <Page>
      <div className={s.pageHeader}>
        <Typography variant={'h1'}>Decks list</Typography>
        <CreateNewDeck />
      </div>
      <DeckFilters />
      <DecksTable
        decks={decks?.items}
        isLoading={isFetching}
        onSort={setSort}
        sort={sort}
        userID={me?.id}
      />
      {decks?.items && (
        <Pagination
          className={s.pagination}
          count={totalPages}
          onPageChange={setCurrentPage}
          onPerPageChange={setPerPage}
          page={currentPage}
          perPage={perPage}
          perPageOptions={perPageOptions}
        />
      )}
    </Page>
  )
}
