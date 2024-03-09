import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './Checkbox.module.scss'

import { Icon } from '..'
type Props = {
  label?: string
}
export const Checkbox = ({ label }: Props) => (
  <div className={s.root}>
    <CheckboxRadix.Root className={s.checkbox} defaultChecked id={'c1'}>
      <CheckboxRadix.Indicator className={s.indicator}>
        <Icon name={'common/check'} size={18} />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
    {label && (
      <label className={s.label} htmlFor={'c1'}>
        {label}
      </label>
    )}
  </div>
)
