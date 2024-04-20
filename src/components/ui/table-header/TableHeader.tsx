import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './TableHeader.module.scss'

import { Icon, Table } from '..'
import { getSortDirection } from './lib/get-sort-direction'

export type TableColumn = { key: SortBy; sortable?: boolean; title: string }

export type SortBy = 'author.name' | 'cardsCount' | 'created' | 'name' | 'updated' | null

export type SortType = {
  direction: 'asc' | 'desc'
  sortBy: SortBy
} | null

type Props = {
  columns: TableColumn[]
  onSort?: (sort: SortType) => void
  sort?: SortType
} & ComponentPropsWithoutRef<'thead'>

export const TableHeader = ({ className, columns, onSort, sort, ...props }: Props) => {
  const handleSort = (key: SortBy) => () => {
    if (sort?.sortBy !== key) {
      return onSort?.({ direction: 'asc', sortBy: key })
    }
    sort && onSort && getSortDirection(key, sort, onSort)
  }
  const direction = sort?.direction === 'asc' ? 'asc' : 'desc'

  return (
    <Table.Head className={clsx(s.tableHeader, className)} {...props}>
      <Table.Row>
        {columns.map(({ key, sortable, title }) => {
          return sortable ? (
            <Table.HeadCell className={s.sortable} key={key} onClick={handleSort(key)}>
              {title}
              {sort?.sortBy === key && (
                <Icon className={s[direction]} name={'common/chevron'} size={14} />
              )}
            </Table.HeadCell>
          ) : (
            <Table.HeadCell key={key}>{title}</Table.HeadCell>
          )
        })}
      </Table.Row>
    </Table.Head>
  )
}
