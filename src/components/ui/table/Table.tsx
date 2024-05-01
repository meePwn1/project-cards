import { ComponentProps } from 'react'

import clsx from 'clsx'

import s from './Table.module.scss'

const Root = ({ className, ...props }: ComponentProps<'table'>) => {
  return <table {...props} className={clsx(s.table, className)} />
}

const Head = ({ className, ...props }: ComponentProps<'thead'>) => {
  return <thead {...props} className={clsx(s.thead, className)} />
}

type TBodyProps = { isLoading?: boolean } & ComponentProps<'tbody'>
const Body = ({ children, className, isLoading, ...props }: TBodyProps) => {
  return (
    <tbody {...props} className={clsx(s.tbody, className, isLoading && s.loading)}>
      {children}
    </tbody>
  )
}

const Row = ({ className, ...props }: ComponentProps<'tr'>) => {
  return <tr {...props} className={clsx(s.tr, className)} />
}

const HeadCell = ({ className, ...props }: ComponentProps<'th'>) => {
  return <th {...props} className={clsx(s.th, className)} />
}

const Cell = ({ className, ...props }: ComponentProps<'td'>) => {
  return <td {...props} className={clsx(s.td, className)} />
}

export const Table = { Body, Cell, Head, HeadCell, Root, Row }
