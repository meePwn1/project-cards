import { Control, FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui'

type Props<T extends FieldValues> = {
  control: Control<T>
} & Omit<RadioGroupProps, 'id' | 'onBlur' | 'onValueChange' | 'value'> &
  Omit<UseControllerProps<T>, 'control'>

export const FormRadio = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onBlur, onChange, ref, value, ...fields },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return <RadioGroup id={fields.name} onValueChange={onChange} {...{ ...rest, ...fields }} />
}
