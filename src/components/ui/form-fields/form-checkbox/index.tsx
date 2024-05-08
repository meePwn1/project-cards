import { Control, FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui'

type Props<T extends FieldValues> = {
  control: Control<T>
} & Omit<CheckboxProps, 'checked' | 'id' | 'onBlur' | 'onCheckedChange'> &
  Omit<UseControllerProps<T>, 'control'>

export const FormCheckbox = <T extends FieldValues>({
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

  return (
    <Checkbox
      checked={value}
      id={fields.name}
      onCheckedChange={onChange}
      {...{ ...rest, ...fields }}
    />
  )
}
