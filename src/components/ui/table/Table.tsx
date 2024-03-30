import { ComponentProps, FC } from 'react'

import clsx from 'clsx'

import s from './Table.module.scss'

type RootProps = ComponentProps<'table'>
type TheadProps = ComponentProps<'thead'>
type TbodyProps = ComponentProps<'tbody'>
type TrProps = ComponentProps<'tr'>
type ThProps = ComponentProps<'th'>
type TdProps = ComponentProps<'td'>

const Root: FC<RootProps> = ({ className, ...rest }) => {
  return <table {...rest} className={clsx(s.table, className)} />
}

const Head = ({ className, ...rest }: TheadProps) => {
  return <thead {...rest} className={clsx(s.thead, className)} />
}

const Body = ({ className, ...rest }: TbodyProps) => {
  return <tbody {...rest} className={clsx(s.tbody, className)} />
}

const Row = ({ className, ...rest }: TrProps) => {
  return <tr {...rest} className={clsx(s.tr, className)} />
}

const HeadCell = ({ className, ...rest }: ThProps) => {
  return <th {...rest} className={clsx(s.th, className)} />
}

const Cell = ({ className, ...rest }: TdProps) => {
  return <td {...rest} className={clsx(s.td, className)} />
}

export const Table = { Body, Cell, Head, HeadCell, Root, Row }
