import { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './Card.module.scss'

type Props<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  px?: number
  py?: number
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: Props<T>) => {
  const { as: Component = 'div', className, px, py, style, ...rest } = props

  const styles = {
    ...(px && { paddingLeft: px, paddingRight: px }),
    ...(py && { paddingBottom: py, paddingTop: py }),
    ...style,
  } as CSSProperties

  return <Component className={clsx(s.root, className)} style={styles} {...rest} />
}
