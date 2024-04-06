import { ElementRef, forwardRef } from 'react'

import { useGetId } from '@/common/hooks'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './Checkbox.module.scss'

import { Icon } from '..'

export type CheckboxProps = {
  className?: string
  label?: string
} & CheckboxRadix.CheckboxProps

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ className, id, label, ...rest }, ref) => {
    const htmlId = useGetId(id)

    return (
      <div className={clsx(s.container, className)}>
        <CheckboxRadix.Root className={s.root} id={htmlId} ref={ref} {...rest}>
          <CheckboxRadix.Indicator className={s.indicator}>
            <Icon name={'common/check'} size={18} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {label && (
          <label className={s.label} htmlFor={htmlId}>
            {label}
          </label>
        )}
      </div>
    )
  }
)
