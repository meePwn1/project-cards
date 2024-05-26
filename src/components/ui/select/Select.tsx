import { ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixUISelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './Select.module.scss'

import { Icon } from '..'

type Option =
  | { disabled?: boolean; text: number; value: number }
  | { disabled?: boolean; text: number; value: string }
  | { disabled?: boolean; text: string; value: number }
  | { disabled?: boolean; text: string; value: string }

type SelectProps = {
  className?: string
  label?: string
  options?: Option[]
  placeholder?: string
  variant?: 'default' | 'pagination'
} & RadixUISelect.SelectProps

export const Select = forwardRef<ElementRef<typeof RadixUISelect.Root>, SelectProps>(
  (
    {
      className,
      defaultValue,
      label,
      options,
      placeholder = 'Select...',
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    return (
      <>
        {variant !== 'pagination' && label && <label className={s.label}>{label}</label>}
        <RadixUISelect.Root defaultValue={defaultValue} {...rest}>
          <RadixUISelect.Trigger
            aria-label={'number'}
            className={clsx(s.trigger, variant === 'pagination' && s.pagination, className)}
            ref={ref}
          >
            <RadixUISelect.Value placeholder={placeholder} />
            <RadixUISelect.Icon className={s.icon}>
              <Icon name={'common/chevron'} size={16} />
            </RadixUISelect.Icon>
          </RadixUISelect.Trigger>
          <div>
            <RadixUISelect.SelectContent className={s.content} position={'popper'}>
              {options?.map(el => {
                return (
                  <SelectItem disabled={el.disabled} key={el.value} value={String(el.value)}>
                    {el.text}
                  </SelectItem>
                )
              })}
            </RadixUISelect.SelectContent>
          </div>
        </RadixUISelect.Root>
      </>
    )
  }
)

type SelectItemProps = {
  children: ReactNode
  disabled?: boolean
  textValue?: string
  value: string
}

const SelectItem = forwardRef<ElementRef<typeof RadixUISelect.Item>, SelectItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <RadixUISelect.Item className={s.item} {...props} ref={ref}>
        <RadixUISelect.ItemText>{children}</RadixUISelect.ItemText>
      </RadixUISelect.Item>
    )
  }
)
