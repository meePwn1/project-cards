import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/common/hooks/use-debounce'
import { getSortString } from '@/common/utils'
import { CreateNewDeck } from '@/components/decks/ui/create-new-deck'
import { DeckFilters } from '@/components/decks/ui/deck-filters'
import { DecksTable } from '@/components/decks/ui/decks-table'
import { Page } from '@/components/layout'
import { Typography } from '@/components/ui'
import { SortType } from '@/components/ui/table-header'
import { useMeQuery } from '@/services/auth'
import { useGetDecksQuery } from '@/services/decks'

import s from './Decks.module.scss'

export const Decks = () => {
  const [sort, setSort] = useState<SortType | null>(null)
  const orderBy = getSortString(sort)

  const [searchParams] = useSearchParams()
  const debouncedValue = useDebounce<string>(searchParams.get('name') || '', 500)
  const params = Object.fromEntries(searchParams)
  const {
    data: decks,
    isFetching,
    isLoading,
  } = useGetDecksQuery({
    ...params,
    name: debouncedValue,
    orderBy,
  })
  const { data: me } = useMeQuery()

  console.log(isFetching)

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
    </Page>
  )
}
