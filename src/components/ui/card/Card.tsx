import { ComponentProps, ReactNode } from 'react'

import clsx from 'clsx'

import s from './Card.module.scss'

type Props = {
  children: ReactNode
} & ComponentProps<'div'>
export const Card = ({ children, className }: Props) => {
  return <div className={clsx(s.root, className)}>{children}</div>
}
