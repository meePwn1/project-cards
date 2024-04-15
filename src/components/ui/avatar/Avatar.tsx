import { CSSProperties, ComponentPropsWithoutRef, forwardRef } from 'react'

import avatar from '@/assets/avatar.png'
import clsx from 'clsx'

import s from './Avatar.module.scss'

type Props = {
  alt?: string
  size?: CSSProperties['width']
  src?: string
} & ComponentPropsWithoutRef<'span'>

export const Avatar = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const { alt, className, size = 36, src, style, ...rest } = props
  const styles: CSSProperties = { ...style, height: size, width: size }

  return (
    <span className={clsx(s.avatar, className)} ref={ref} style={styles} {...rest}>
      {src ? (
        <img alt={alt} className={s.image} src={src} />
      ) : (
        <img alt={alt} className={s.image} src={avatar} />
      )}
    </span>
  )
})
