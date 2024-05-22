import { SORT_BY } from '@/common/constants'
import { SortType, TableColumn } from '@/common/types'
import { Rating, Table } from '@/components/ui'
import { TableHeader } from '@/components/ui/table-header'
import { CardsResponse } from '@/services'

import s from './CardsTable.module.scss'

import { DeleteCard } from '../delete-card'
import { EditCard } from '../edit-card'

const columnsWithActions: TableColumn[] = [
  {
    key: SORT_BY.QUESTION,
    sortable: true,
    title: 'Question',
  },
  {
    key: SORT_BY.ANSWER,
    sortable: true,
    title: 'Answer',
  },
  {
    key: SORT_BY.UPDATED,
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: SORT_BY.GRADE,
    sortable: true,
    title: 'Grade',
  },
  {
    key: null,
    sortable: false,
    title: '',
  },
]

const columnsWithoutActions: TableColumn[] = [
  {
    key: SORT_BY.QUESTION,
    sortable: true,
    title: 'Question',
  },
  {
    key: SORT_BY.ANSWER,
    sortable: true,
    title: 'Answer',
  },
  {
    key: SORT_BY.UPDATED,
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: SORT_BY.GRADE,
    sortable: true,
    title: 'Grade',
  },
]

type Props = {
  cards?: CardsResponse['items']
  isMyDeck?: boolean
  onSort?: (sort: SortType) => void
  sort?: SortType
}
export const CardsTable = ({ cards, isMyDeck, onSort, sort }: Props) => {
  return (
    <div className={s.tableContainer}>
      <Table.Root className={s.table}>
        <TableHeader
          columns={isMyDeck ? columnsWithActions : columnsWithoutActions}
          onSort={onSort}
          sort={sort}
        />
        <Table.Body>
          {cards?.map(item => {
            return (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <div className={s.tableCell}>
                    {item.questionImg && <img alt={'question image'} src={item.questionImg} />}
                    {item.question}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className={s.tableCell}>
                    {item.answerImg && <img alt={'question image'} src={item.answerImg} />}
                    {item.answer}
                  </div>
                </Table.Cell>
                <Table.Cell>{new Date(item.updated).toLocaleDateString()}</Table.Cell>
                <Table.Cell>
                  <Rating className={s.rating} readonly value={item.grade} />
                </Table.Cell>
                {isMyDeck && (
                  <Table.Cell>
                    <div className={s.actions}>
                      <EditCard card={item} />
                      <DeleteCard cardId={item.id} />
                    </div>
                  </Table.Cell>
                )}
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
