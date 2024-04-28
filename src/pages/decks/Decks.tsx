import { useSearchParams } from 'react-router-dom'

import { CreateNewDeck } from '@/components/decks/ui/create-new-deck'
import { DeckFilters } from '@/components/decks/ui/deck-filters'
import { Page } from '@/components/layout'
import { Table, Typography } from '@/components/ui'
import { TableColumn, TableHeader } from '@/components/ui/table-header'
import { useMeQuery } from '@/services/auth'
import { useGetDecksQuery } from '@/services/decks'

import s from './Decks.module.scss'

export const Decks = () => {
  const [params, setParams] = useSearchParams({ maxCardsCount: '10', minCardsCount: '0' })

  const { data: decks } = useGetDecksQuery(Object.fromEntries(params))
  const { data: meData } = useMeQuery()

  const clearFilter = () => {
    setParams({})
  }

  const changeTabsValue = (newTabValue: string) => {
    const tabsValueQuery = newTabValue !== '' ? { authorId: meData?.id } : ''
    const { authorId, ...restParams } = Object.fromEntries(params)
    const allParams = { ...tabsValueQuery, ...restParams }

    setParams(allParams)
  }

  const changeSearchValue = (newValue: string) => {
    const searchValueQuery = newValue !== '' ? { name: newValue } : ''
    const { name, ...restParams } = Object.fromEntries(params)
    const allParams = { ...searchValueQuery, ...restParams }

    setParams(allParams)
  }

  const changeSliderValue = (arr: Array<string>) => {
    const sliderValueQuery =
      arr[0] !== '0' || arr[1] !== '10'
        ? { maxCardsCount: arr[1], minCardsCount: arr[0] }
        : { maxCardsCount: '10', minCardsCount: '0' }
    const { ...restParams } = Object.fromEntries(params)
    const allParams = {
      ...restParams,
      maxCardsCount: sliderValueQuery.maxCardsCount,
      minCardsCount: sliderValueQuery.minCardsCount,
    }

    setParams(allParams)
  }

  const columns: TableColumn[] = [
    { key: 'name', sortable: true, title: 'Name' },
    { key: 'cardsCount', sortable: true, title: 'Cards Count' },
    { key: 'updated', sortable: true, title: 'Last Updated' },
    { key: 'author.name', sortable: true, title: 'Created by' },
    { key: null, title: '' },
  ]

  return (
    <Page>
      <div className={s.pageHeader}>
        <Typography variant={'h1'}>Decks list</Typography>
        <CreateNewDeck />
      </div>
      <DeckFilters
        changeSearchValue={changeSearchValue}
        changeSliderValue={changeSliderValue}
        changeTabsValue={changeTabsValue}
        clearFilter={clearFilter}
        params={params}
      />
      <div className={s.tableContainer}>
        <Table.Root>
          <TableHeader columns={columns} />
        </Table.Root>
      </div>
      <ul>{decks?.items.map(item => <div key={item.id}>{item.name}</div>)}</ul>
    </Page>
  )
}
