import { CSSProperties } from 'react'

import * as RadixScroll from '@radix-ui/react-scroll-area'
import clsx from 'clsx'

import s from './CustomScroll.module.scss'

type Props = {
  mh?: CSSProperties['maxHeight']
  type?: RadixScroll.ScrollAreaProps['type']
} & RadixScroll.ScrollAreaProps

export const ScrollArea = ({ children, className, mh, type = 'auto', ...rest }: Props) => {
  const classNames = {
    root: clsx(s.root, className),
    scrollbar: s.scrollbar,
    thumb: s.thumb,
    viewport: s.viewport,
  }

  return (
    <RadixScroll.Root className={clsx(s.root, className)} type={type} {...rest}>
      <RadixScroll.Viewport className={classNames.viewport} style={{ maxHeight: mh }}>
        {children}
      </RadixScroll.Viewport>
      <RadixScroll.Scrollbar className={classNames.scrollbar} orientation={'vertical'}>
        <RadixScroll.Thumb className={classNames.thumb} />
      </RadixScroll.Scrollbar>
      <RadixScroll.Scrollbar className={classNames.scrollbar} orientation={'horizontal'}>
        <RadixScroll.Thumb className={classNames.thumb} />
      </RadixScroll.Scrollbar>
    </RadixScroll.Root>
  )
}
