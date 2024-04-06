import { ElementRef, forwardRef } from 'react'

import { useGetId } from '@/common/hooks'
import * as RadixUIRadioGroup from '@radix-ui/react-radio-group'

import s from './Radio.module.scss'

type Option = {
  disabled?: boolean
  label: string
  required?: boolean
  value: string
}

export type RadioGroupProps = {
  options: Option[]
} & RadixUIRadioGroup.RadioGroupProps

export const RadioGroup = forwardRef<ElementRef<typeof RadixUIRadioGroup.Root>, RadioGroupProps>(
  ({ options, ...rest }: RadioGroupProps, ref) => {
    const htmlID = useGetId(rest.id)

    return (
      <RadixUIRadioGroup.Root {...rest} ref={ref}>
        {options.map(option => (
          <div className={s.itemContainer} key={option.value}>
            <RadixUIRadioGroup.Item
              className={s.item}
              disabled={option.disabled}
              id={`${htmlID}-${option.value}`}
              required={option.required}
              value={option.value}
            >
              <RadixUIRadioGroup.Indicator className={s.indicator} />
            </RadixUIRadioGroup.Item>
            <label htmlFor={`${htmlID}-${option.value}`}>{option.label}</label>
          </div>
        ))}
      </RadixUIRadioGroup.Root>
    )
  }
)
