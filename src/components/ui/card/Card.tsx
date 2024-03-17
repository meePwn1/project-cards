import { CSSProperties, ComponentProps, ReactNode } from 'react'

import clsx from 'clsx'

import s from './Card.module.scss'

type Props = {
  children: ReactNode
  px?: number
  py?: number
} & ComponentProps<'div'>
export const Card = ({ children, className, px, py, style }: Props) => {
  const styles = {
    ...(px && { paddingLeft: px, paddingRight: px }),
    ...(py && { paddingBottom: py, paddingTop: py }),
    ...style,
  } as CSSProperties

  return (
    <div className={clsx(s.root, className)} style={styles}>
      {children}
    </div>
  )
}
