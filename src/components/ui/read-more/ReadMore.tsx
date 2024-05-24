import { ReactNode, useState } from 'react'

import s from './ReadMore.module.scss'

type Props = {
  children?: ReactNode
  max?: number
  text?: string
}
export const ReadMore = ({ children, max = 20, text }: Props) => {
  const [show, setShow] = useState(false)
  let hideText
  const isShowMoreButton = (text && text?.length > max) || children

  if (text) {
    if (text.length > max) {
      hideText = text.slice(0, max) + '...'
    } else {
      hideText = children ? text + '...' : text
    }
  }

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <span className={s.readMore}>{show ? text : hideText}</span>
      {show && children}
      {isShowMoreButton && (
        <button className={s.moreButton} onClick={handleShow}>
          {show ? 'Hide' : 'More'}
        </button>
      )}
    </>
  )
}
