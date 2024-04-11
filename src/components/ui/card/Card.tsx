import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './Card.module.scss'

type Props<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: Props<T>) => {
  const { as: Component = 'div', className, px, py, style, ...rest } = props

  return <Component className={clsx(s.root, className)} {...rest} />
}
