import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import avatar from '@/assets/avatar.png'
import clsx from 'clsx'

import s from './Avatar.module.scss'

type Props = {
  alt?: string
  size?: CSSProperties['width']
  src?: string
} & ComponentPropsWithoutRef<'img'>

export const Avatar = ({ alt, className, size = 36, src, style, ...rest }: Props) => {
  return (
    <span
      className={clsx(s.avatar, className)}
      {...rest}
      style={{ ...style, height: size, width: size }}
    >
      {src ? (
        <img alt={alt} className={s.image} src={src} />
      ) : (
        <img alt={alt} className={s.image} src={avatar} />
      )}
    </span>
  )
}
