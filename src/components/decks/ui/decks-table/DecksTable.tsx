import cover from '@/assets/image-placeholder.png'
import { Icon, ScrollArea, Table } from '@/components/ui'
import { Spinner } from '@/components/ui/spinner'
import { SortType, TableColumn, TableHeader } from '@/components/ui/table-header'
import { DecksResponse } from '@/services/decks'

import s from './DecksTable.module.scss'

import { DeleteDeck } from '../delete-deck/DeleteDeck'
const columns: TableColumn[] = [
  { key: 'name', sortable: true, title: 'Name' },
  { key: 'cardsCount', sortable: true, title: 'Cards' },
  { key: 'updated', sortable: true, title: 'Last Updated' },
  { key: 'author.name', sortable: true, title: 'Created by' },
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
                <Table.Cell className={s.name}>
                  <div className={s.cover}>
                    <img alt={'deck cover'} src={item.cover || cover} />
                  </div>
                  {item.name}
                </Table.Cell>
                <Table.Cell>{item.cardsCount}</Table.Cell>
                <Table.Cell>{new Date(item.updated).toLocaleDateString()}</Table.Cell>
                <Table.Cell>{item.author.name}</Table.Cell>
                <Table.Cell>
                  <div className={s.actions}>
                    <Icon name={'common/play'} size={20} />
                    {isMyDeck && (
                      <>
                        <Icon name={'common/edit'} size={20} />
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
