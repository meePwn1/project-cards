import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'id' | 'onBlur' | 'onChange' | 'value'>

export const FormTextField = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onBlur, onChange, ref, value, ...fields },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return (
    <TextField
      disabled={fields.disabled}
      id={fields.name}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      value={value}
      {...rest}
    />
  )
}
