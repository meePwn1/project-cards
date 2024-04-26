import { useCallback } from 'react'

import { CreateNewDeck } from '@/components/decks/ui/create-new-deck'
import { DeckFilters } from '@/components/decks/ui/deck-filters'
import { Page } from '@/components/layout'
import { Table, Typography } from '@/components/ui'
import { TableColumn, TableHeader } from '@/components/ui/table-header'
import { DecksParams, useLazyGetDecksQuery } from '@/services/decks'

import s from './Decks.module.scss'

export const Decks = () => {
  const [lazyGetDecks, { data: decks }] = useLazyGetDecksQuery()

  const getDecks = useCallback(
    (options: DecksParams) => {
      lazyGetDecks(options)
    },
    [lazyGetDecks]
  )

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
      <DeckFilters getDecks={getDecks} />
      <div className={s.tableContainer}>
        <Table.Root>
          <TableHeader columns={columns} />
        </Table.Root>
      </div>
      <ul>{decks?.items.map(item => <div key={item.id}>{item.name}</div>)}</ul>
    </Page>
  )
}
