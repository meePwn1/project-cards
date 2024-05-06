import { ComponentPropsWithoutRef } from 'react'

import { SortType, TableColumn } from '@/common/types'
import clsx from 'clsx'

import s from './TableHeader.module.scss'

import { Icon, Table } from '..'
import { getSortDirection } from './lib/get-sort-direction'

type Props = {
  columns: TableColumn[]
  onSort?: (sort: SortType) => void
  sort?: SortType
} & ComponentPropsWithoutRef<'thead'>

export const TableHeader = ({ className, columns, onSort, sort, ...props }: Props) => {
  const handleSort = (key: null | string) => () => {
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
              <div>
                {title}
                {sort?.sortBy === key && (
                  <span>
                    <Icon className={s[direction]} name={'common/chevron'} size={14} />
                  </span>
                )}
              </div>
            </Table.HeadCell>
          ) : (
            <Table.HeadCell key={key}>{title}</Table.HeadCell>
          )
        })}
      </Table.Row>
    </Table.Head>
  )
}
