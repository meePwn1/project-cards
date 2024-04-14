import { CSSProperties, ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './Container.module.scss'

type Props = {
  children: React.ReactNode
  pt?: CSSProperties['paddingTop']
} & ComponentPropsWithoutRef<'div'>

export const Container = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, pt, style, ...rest } = props
  const styles: CSSProperties = { paddingTop: pt, ...style }

  return (
    <div className={clsx(s.root, className)} style={styles} {...rest} ref={ref}>
      {children}
    </div>
  )
})
