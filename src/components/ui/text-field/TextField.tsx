import {
  ChangeEvent,
  ComponentPropsWithRef,
  HTMLInputTypeAttribute,
  forwardRef,
  useState,
} from 'react'

import { useGetId } from '@/common/hooks'
import clsx from 'clsx'

import s from './TextField.module.scss'

import { Icon, Typography } from '..'

export type TextFieldProps = {
  error?: string
  label?: string
  onClear?: () => void
  onValueChange?: (value: string) => void
  search?: boolean
  togglePassword?: boolean
  value?: string
} & ComponentPropsWithRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      error,
      id,
      label,
      onChange,
      onClear,
      onValueChange,
      search,
      togglePassword,
      ...rest
    },
    ref
  ) => {
    const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(() => {
      return togglePassword ? 'password' : 'text'
    })
    const inputId = useGetId(id)
    const isShowResetIcon = rest.value?.length! > 0

    const handleChangePasswordType = () => {
      setInputType(prev => (prev === 'text' ? 'password' : 'text'))
    }
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }
    const handleClearInput = () => {
      onValueChange?.('') || onClear?.()
    }

    return (
      <div className={clsx(s.field, className)}>
        {label && (
          <label className={clsx(s.label, error && s.error)} htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className={s.inputWrapper}>
          <input
            className={clsx('input-reset', s.input, search && s.search, error && s.error)}
            id={inputId}
            onChange={handleChangeInput}
            ref={ref}
            type={inputType}
            {...rest}
          />

          {togglePassword && (
            <button className={s['icon-right']} onClick={handleChangePasswordType} type={'button'}>
              <Icon name={inputType === 'text' ? 'common/eye' : 'common/eye-closed'} />
            </button>
          )}
          {search && (
            <>
              <Icon className={s['icon-left']} name={'common/search'} size={20} />
              {isShowResetIcon && (
                <button className={s['icon-right']} onClick={handleClearInput}>
                  <Icon name={'common/close'} size={20} />
                </button>
              )}
            </>
          )}
          {error && (
            <Typography className={s.errorLabel} variant={'error'}>
              {error}
            </Typography>
          )}
        </div>
      </div>
    )
  }
)
