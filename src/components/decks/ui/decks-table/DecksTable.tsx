import { Link } from 'react-router-dom'

import cover from '@/assets/image-placeholder.png'
import { ROUTES } from '@/common/constants'
import { SORT_BY } from '@/common/constants/sortBy'
import { SortType, TableColumn } from '@/common/types'
import { Button, Icon, ScrollArea, Table } from '@/components/ui'
import { Spinner } from '@/components/ui/spinner'
import { TableHeader } from '@/components/ui/table-header'
import { DecksResponse } from '@/services/decks'

import s from './DecksTable.module.scss'

import { DeleteDeck } from '../delete-deck/DeleteDeck'
import { EditDeck } from '../edit-deck'
const columns: TableColumn[] = [
  { key: SORT_BY.NAME, sortable: true, title: 'Name' },
  { key: SORT_BY.CARDS_COUNT, sortable: true, title: 'Cards' },
  { key: SORT_BY.UPDATED, sortable: true, title: 'Last Updated' },
  { key: SORT_BY.AUTHOR_NAME, sortable: true, title: 'Created by' },
  { key: null, title: '' },
]

type Props = {
  decks?: DecksResponse['items']
  isLoading?: boolean
  onSort?: (sort: SortType) => void
  sort?: SortType
  userID?: string
}

export const DecksTable = ({ decks, isLoading, onSort, sort, userID }: Props) => {
  return decks?.length ? (
    <ScrollArea className={s.tableContainer}>
      <Table.Root className={s.table}>
        <TableHeader columns={columns} onSort={onSort} sort={sort} />
        <Table.Body isLoading={isLoading}>
          {decks?.map(item => {
            const isMyDeck = item.author.id === userID

            return (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <Link className={s.name} to={ROUTES.CARDS(item.id)}>
                    <div className={s.cover}>
                      <img alt={'deck cover'} src={item.cover || cover} />
                    </div>
                    {item.name}
                  </Link>
                </Table.Cell>
                <Table.Cell>{item.cardsCount}</Table.Cell>
                <Table.Cell>{new Date(item.updated).toLocaleDateString()}</Table.Cell>
                <Table.Cell>{item.author.name}</Table.Cell>
                <Table.Cell>
                  <div className={s.actions}>
                    <Button as={Link} to={ROUTES.LEARN(item.id)} variant={'icon'}>
                      <Icon name={'common/play'} size={20} />
                    </Button>

                    {isMyDeck && (
                      <>
                        <EditDeck deck={item} />
                        <DeleteDeck deckName={item.name} id={item.id} />
                      </>
                    )}
                  </div>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </ScrollArea>
  ) : (
    <div className={s.empty}>
      <span>
        No content with these terms...
        {isLoading && <Spinner className={s.loader} />}
      </span>
    </div>
  )
}
