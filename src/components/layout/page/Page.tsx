import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react'

import clsx from 'clsx'

import s from './Page.module.scss'

type Props = {
  centered?: boolean
  children: ReactNode
  pt?: CSSProperties['paddingTop']
} & ComponentPropsWithoutRef<'div'>

export const Page = (props: Props) => {
  const { centered = false, children, className, pt = 35, style, ...rest } = props
  const styles: CSSProperties = { paddingTop: pt, ...style }

  return (
    <div className={clsx(className, centered && s.centered)} style={styles} {...rest}>
      {children}
    </div>
  )
}
