import { SORT_BY } from '@/common/constants'
import { TableColumn } from '@/common/types'
import { Button, Icon, Rating, Table } from '@/components/ui'
import { TableHeader } from '@/components/ui/table-header'
import { CardsResponse } from '@/services'

import s from './CardsTable.module.scss'

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
}
export const CardsTable = ({ cards, isMyDeck }: Props) => {
  return (
    <Table.Root className={s.table}>
      <TableHeader columns={columnsWithoutActions} />
      <Table.Body>
        {cards?.map(item => {
          return (
            <Table.Row key={item.id}>
              <Table.Cell>{item.question}</Table.Cell>
              <Table.Cell>{item.answer}</Table.Cell>
              <Table.Cell>{new Date(item.updated).toLocaleDateString()}</Table.Cell>
              <Table.Cell>
                <Rating className={s.rating} readonly value={item.grade} />
              </Table.Cell>
              {isMyDeck && (
                <Table.Cell>
                  <div className={s.actions}>
                    <Button type={'button'} variant={'icon'}>
                      <Icon name={'common/edit'} size={20} />
                    </Button>
                    <Button variant={'icon'}>
                      <Icon name={'common/trash'} size={20} />
                    </Button>
                  </div>
                </Table.Cell>
              )}
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
