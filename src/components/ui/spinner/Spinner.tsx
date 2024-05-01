import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './Spinner.module.scss'

import { Icon } from '..'

type Props = Omit<ComponentPropsWithoutRef<typeof Icon>, 'name'>

export const Spinner = ({ className, size = 20, ...rest }: Props) => {
  return (
    <Icon {...rest} className={clsx(s.spinner, className)} name={'common/spinner'} size={size} />
  )
}
