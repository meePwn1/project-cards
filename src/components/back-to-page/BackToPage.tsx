import { Link, LinkProps } from 'react-router-dom'

import clsx from 'clsx'

import s from './BackToPage.module.scss'

import { Icon } from '../ui'

type Props = {} & LinkProps

export const BackToPage = ({ className, ...rest }: Props) => {
  return (
    <Link {...rest} className={clsx(s.backToPage, className)}>
      <Icon height={10} name={'common/arrow-back-outline'} /> Back to Decks List
    </Link>
  )
}
