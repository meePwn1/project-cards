import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './Button.module.scss'

import { Spinner } from '../spinner'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  className?: string
  fullWidth?: boolean
  isLoading?: boolean
  variant?: 'icon' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    disabled,
    fullWidth,
    isLoading,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={clsx(
        s.button,
        s[variant],
        fullWidth && s.fullWidth,
        isLoading && s.loading,
        className
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      {children}
      {isLoading && <Spinner className={s.spinner} />}
    </Component>
  )
}
