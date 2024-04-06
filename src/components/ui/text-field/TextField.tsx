import { ComponentPropsWithRef, HTMLInputTypeAttribute, forwardRef, useState } from 'react'

import { useGetId } from '@/common/hooks'
import clsx from 'clsx'

import s from './TextField.module.scss'

import { Icon, Typography } from '..'

export type TextFieldProps = {
  error?: string
  label?: string
  onClear?: () => void
  search?: boolean
  togglePassword?: boolean
  value?: string
} & ComponentPropsWithRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ error, id, label, onClear, search, togglePassword, ...rest }, ref) => {
    const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(() => {
      return togglePassword ? 'password' : 'text'
    })
    const inputId = useGetId(id)
    const isShowResetIcon = rest.value?.length! > 0

    const handleChangePasswordType = () => {
      setInputType(prev => (prev === 'text' ? 'password' : 'text'))
    }

    return (
      <div className={s.field}>
        {label && (
          <label className={clsx(s.label, error && s.error)} htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className={s.inputWrapper}>
          <input
            className={clsx('input-reset', s.input, search && s.search, error && s.error)}
            id={inputId}
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
                <button className={s['icon-right']} onClick={onClear}>
                  <Icon name={'common/close'} size={20} />
                </button>
              )}
            </>
          )}
        </div>
        {error && <Typography variant={'error'}>{error}</Typography>}
      </div>
    )
  }
)
