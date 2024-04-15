import { Link, LinkProps } from 'react-router-dom'

import logo from '@/assets/logo.svg'
import clsx from 'clsx'

import s from './Logo.module.scss'

type Props = {
  className?: string
} & LinkProps

export const Logo = (props: Props) => {
  const { className, to, ...rest } = props

  return (
    <Link className={clsx(className, s.logo)} to={to} {...rest}>
      <img alt={'logo'} src={logo} />
    </Link>
  )
}
