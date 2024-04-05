import { ComponentProps, FC } from 'react'

import clsx from 'clsx'

import s from './Table.module.scss'

import { Icon } from '..'

type RootProps = ComponentProps<'table'>
type TheadProps = ComponentProps<'thead'>
type TbodyProps = ComponentProps<'tbody'>
type TrProps = ComponentProps<'tr'>
type ThProps = ComponentProps<'th'>
type TdProps = ComponentProps<'td'>

type Column = { sortBy: SortBy; title: string }

export type SortBy = 'author.name' | 'cardsCount' | 'created' | 'name' | 'updated'

export type SortType = {
  direction: 'asc' | 'desc'
  sortBy: SortBy
} | null

type SortTableProps = ThProps & {
  column: Column
  onSort: (sort: SortType) => void
  sort: SortType
}

export const Root: FC<RootProps> = ({ className, ...props }) => {
  return <table {...props} className={clsx(s.table, className)} />
}

export const Head = ({ className, ...props }: TheadProps) => {
  return <thead {...props} className={clsx(s.thead, className)} />
}

export const Body = ({ className, ...props }: TbodyProps) => {
  return <tbody {...props} className={clsx(s.tbody, className)} />
}

export const Row = ({ className, ...props }: TrProps) => {
  return <tr {...props} className={clsx(s.tr, className)} />
}

export const HeadCell = ({ className, ...props }: ThProps) => {
  return <th {...props} className={clsx(s.th, className)} />
}

export const Cell = ({ className, ...props }: TdProps) => {
  return <td {...props} className={clsx(s.td, className)} />
}

export const SortableHeadCell = ({ className, column, onSort, sort, ...props }: SortTableProps) => {
  const handleSort = () => {
    if (sort?.sortBy !== column.sortBy) {
      return onSort({ direction: 'asc', sortBy: column.sortBy })
    }
    // eslint-disable-next-line no-nested-ternary
    sort.direction === 'asc'
      ? onSort({ direction: 'desc', sortBy: column.sortBy })
      : sort.direction === 'desc'
        ? onSort(null)
        : onSort({ direction: 'asc', sortBy: column.sortBy })
  }

  return (
    <HeadCell {...props} className={clsx(s.sortable, className)} onClick={handleSort}>
      {column.title}
      {sort?.sortBy === column.sortBy && (
        <Icon
          className={sort.direction === 'asc' ? s.asc : s.desc}
          name={'common/chevron'}
          size={12}
        />
      )}
    </HeadCell>
  )
}

export const Table = { Body, Cell, Head, HeadCell, Root, Row, SortableHeadCell }
