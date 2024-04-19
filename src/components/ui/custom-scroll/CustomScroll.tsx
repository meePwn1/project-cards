import { ComponentPropsWithoutRef } from 'react'

import * as RadixScroll from '@radix-ui/react-scroll-area'
import clsx from 'clsx'

import s from './CustomScroll.module.scss'

type Props = {
  type?: RadixScroll.ScrollAreaProps['type']
} & ComponentPropsWithoutRef<'div'>

export const ScrollArea = ({ children, className, type = 'auto', ...rest }: Props) => {
  const classNames = {
    root: clsx(s.root, className),
    scrollbar: s.scrollbar,
    thumb: s.thumb,
    viewport: s.viewport,
  }

  return (
    <RadixScroll.Root asChild type={type}>
      <div className={classNames.root} {...rest}>
        <RadixScroll.Viewport className={classNames.viewport}>{children}</RadixScroll.Viewport>
        <RadixScroll.Scrollbar className={classNames.scrollbar} orientation={'vertical'}>
          <RadixScroll.Thumb className={classNames.thumb} />
        </RadixScroll.Scrollbar>
        <RadixScroll.Scrollbar className={classNames.scrollbar} orientation={'horizontal'}>
          <RadixScroll.Thumb className={classNames.thumb} />
        </RadixScroll.Scrollbar>
      </div>
    </RadixScroll.Root>
  )
}
