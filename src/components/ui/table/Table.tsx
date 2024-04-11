import { ComponentProps } from 'react'

import clsx from 'clsx'

import s from './Table.module.scss'

export const Root = ({ className, ...props }: ComponentProps<'table'>) => {
  return <table {...props} className={clsx(s.table, className)} />
}

export const Head = ({ className, ...props }: ComponentProps<'thead'>) => {
  return <thead {...props} className={clsx(s.thead, className)} />
}

export const Body = ({ className, ...props }: ComponentProps<'tbody'>) => {
  return <tbody {...props} className={clsx(s.tbody, className)} />
}

export const Row = ({ className, ...props }: ComponentProps<'tr'>) => {
  return <tr {...props} className={clsx(s.tr, className)} />
}

export const HeadCell = ({ className, ...props }: ComponentProps<'th'>) => {
  return <th {...props} className={clsx(s.th, className)} />
}

export const Cell = ({ className, ...props }: ComponentProps<'td'>) => {
  return <td {...props} className={clsx(s.td, className)} />
}

export const Table = { Body, Cell, Head, HeadCell, Root, Row }
