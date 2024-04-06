import { forwardRef } from 'react'

import { useGetId } from '@/common/hooks'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './Checkbox.module.scss'

import { Icon } from '..'

type Props = {
  checked?: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  required?: boolean
}

export const Checkbox = forwardRef<HTMLButtonElement, Props>(
  ({ checked, disabled, id, label, onChange, required }, ref) => {
    const htmlId = useGetId(id)

    return (
      <div className={s.container}>
        <CheckboxRadix.Root
          checked={checked}
          className={s.root}
          disabled={disabled}
          id={htmlId}
          onCheckedChange={onChange}
          ref={ref}
          required={required}
        >
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
