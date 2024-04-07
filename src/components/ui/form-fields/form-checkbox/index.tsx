import { Control, FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui'

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'control'> & {
  control: Control<T>
} & Omit<CheckboxProps, 'checked' | 'id' | 'onBlur' | 'onCheckedChange'>

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
