import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import './styles.css'

export const Checkbox = () => (
  <form>
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <CheckboxRadix.Root className={'CheckboxRoot'} defaultChecked id={'c1'}>
        <CheckboxRadix.Indicator className={'CheckboxIndicator'}>
          <CheckIcon />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <label className={'Label'} htmlFor={'c1'}>
        Accept terms and conditions.
      </label>
    </div>
  </form>
)

export default CheckboxDemo
