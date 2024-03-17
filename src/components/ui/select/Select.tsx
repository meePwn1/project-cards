import { ReactNode } from 'react'

import * as RadixUISelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './Select.module.scss'

import { Icon } from '..'

type Option = {
  disabled?: boolean
  text: string
  value: string
}
type SelectProps = {
  options: Option[]
  placeholder?: string
  variant: 'default' | 'pagination'
} & RadixUISelect.SelectProps

export const Select = ({
  defaultValue,
  options,
  placeholder = 'Select...',
  variant = 'default',
  ...rest
}: SelectProps) => {
  return (
    <RadixUISelect.Root defaultValue={defaultValue} {...rest}>
      <RadixUISelect.Trigger
        aria-label={'number'}
        className={clsx(s.trigger, variant === 'pagination' && s.pagination)}
      >
        <RadixUISelect.Value placeholder={placeholder} />
        <RadixUISelect.Icon className={s.icon}>
          <Icon name={'common/chevron'} size={16} />
        </RadixUISelect.Icon>
      </RadixUISelect.Trigger>
      <div>
        <RadixUISelect.SelectContent className={s.content} position={'popper'}>
          {options.map(el => {
            return (
              <SelectItem disabled={el.disabled} key={el.value} value={el.value}>
                {el.text}
              </SelectItem>
            )
          })}
        </RadixUISelect.SelectContent>
      </div>
    </RadixUISelect.Root>
  )
}

type SelectItemProps = {
  children: ReactNode
  disabled?: boolean
  textValue?: string
  value: string
}

const SelectItem = ({ children, ...props }: SelectItemProps) => {
  return (
    <RadixUISelect.Item className={s.item} {...props}>
      <RadixUISelect.ItemText>{children}</RadixUISelect.ItemText>
    </RadixUISelect.Item>
  )
}
