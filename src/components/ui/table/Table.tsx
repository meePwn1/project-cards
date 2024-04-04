import { ComponentProps, FC } from 'react'

import clsx from 'clsx'

import s from './Table.module.scss'

import { Icon } from '..'

type SortType = {
  activeColumn: string
  direction: 'asc' | 'desc'
  orderBy: string
} | null

type RootProps = ComponentProps<'table'>
type TheadProps = ComponentProps<'thead'>
type TbodyProps = ComponentProps<'tbody'>
type TrProps = ComponentProps<'tr'>
type ThProps = ComponentProps<'th'>
type TdProps = ComponentProps<'td'>
type SortTableProps = ThProps & {
  column: { label: string; value: string }
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
  const handleSort = (value: string, sortDirection: 'asc' | 'desc', activeColumn: string) => {
    const orderBy = value + '-' + sortDirection

    const direction = (() => {
      if (column.value !== sort?.activeColumn) {
        return 'asc'
      }
      switch (sortDirection) {
        case 'asc':
          return 'desc'
        case 'desc':
          return 'asc'
        default:
          return 'asc'
      }
    })()

    onSort({ activeColumn, direction, orderBy })
  }
  const icon = (
    <Icon
      className={clsx(sort?.direction && s[sort.direction])}
      name={'common/chevron'}
      size={12}
    />
  )

  return (
    <HeadCell
      className={s.sortable}
      onClick={() => handleSort(column.value, sort && sort.direction, column.value)}
    >
      {column.label}
      {column.value === sort?.activeColumn && <span>{icon}</span>}
    </HeadCell>
  )
}

export const Table = { Body, Cell, Head, HeadCell, Root, Row, SortableHeadCell }
