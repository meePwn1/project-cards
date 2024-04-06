import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'id' | 'onBlur' | 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { name, onBlur, onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    name: rest.name,
    rules,
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
