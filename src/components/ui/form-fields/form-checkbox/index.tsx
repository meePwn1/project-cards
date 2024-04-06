import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'id' | 'onBlur' | 'onCheckedChange'>

export const FormCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    shouldUnregister,
  })

  return (
    <Checkbox
      checked={value}
      id={name}
      onBlur={onBlur}
      onCheckedChange={onChange}
      ref={ref}
      {...rest}
    />
  )
}
