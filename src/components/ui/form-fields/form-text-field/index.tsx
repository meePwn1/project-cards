import { Control, FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui'

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'control'> & {
  control: Control<T>
} & Omit<TextFieldProps, 'id' | 'onBlur' | 'onChange' | 'value'>

export const FormTextField = <T extends FieldValues>(props: Props<T>) => {
  const { field } = useController({
    control: props.control,
    defaultValue: props.defaultValue,
    disabled: props.disabled,
    name: props.name,
    rules: props.rules,
    shouldUnregister: props.shouldUnregister,
  })

  return <TextField id={props.name} {...{ ...props, ...field }} />
}
