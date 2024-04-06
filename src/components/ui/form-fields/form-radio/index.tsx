import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'id' | 'onBlur' | 'onValueChange' | 'value'>

export const FormRadio = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
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
    shouldUnregister,
  })

  return (
    <RadioGroup
      disabled={fields.disabled}
      id={fields.name}
      onBlur={onBlur}
      onValueChange={onChange}
      ref={ref}
      value={value}
      {...rest}
    />
  )
}
