import { Link, LinkProps, useNavigate } from 'react-router-dom'

import clsx from 'clsx'

import s from './BackToPage.module.scss'

import { Icon } from '../ui'

type Props = {} & Omit<LinkProps, 'to'>

export const BackToPage = ({ className, ...rest }: Props) => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <Link {...rest} className={clsx(s.backToPage, className)} onClick={handleBackClick} to={'..'}>
      <Icon height={10} name={'common/arrow-back-outline'} /> Back to Decks List
    </Link>
  )
}
