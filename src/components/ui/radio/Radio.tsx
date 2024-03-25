import { useId } from 'react'

import * as RadixUIRadioGroup from '@radix-ui/react-radio-group'

import s from './Radio.module.scss'

type Option = {
  disabled?: boolean
  label: string
  required?: boolean
  value: string
}

type RadioGroupProps = {
  options: Option[]
} & RadixUIRadioGroup.RadioGroupProps

export const RadioGroup = ({ options, ...rest }: RadioGroupProps) => {
  const id = useId()

  return (
    <RadixUIRadioGroup.Root {...rest}>
      {options.map(option => (
        <div className={s.itemContainer} key={option.value}>
          <RadixUIRadioGroup.Item
            className={s.item}
            disabled={option.disabled}
            id={`${id}-${option.value}`}
            required={option.required}
            value={option.value}
          >
            <RadixUIRadioGroup.Indicator className={s.indicator} />
          </RadixUIRadioGroup.Item>
          <label htmlFor={`${id}-${option.value}`}>{option.label}</label>
        </div>
      ))}
    </RadixUIRadioGroup.Root>
  )
}
