import { HTMLInputTypeAttribute, InputHTMLAttributes, forwardRef, useState } from 'react'

import clsx from 'clsx'

import s from './Input.module.scss'

import { Icon } from '..'
import { useGetId } from './lib/use-get-id'

type InputProps = {
  error?: string
  hasError?: boolean
  label?: string
  onClear?: () => void
  search?: boolean
  togglePassword?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, hasError, id, label, onClear, search, togglePassword, ...rest }, ref) => {
    const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(() => {
      return togglePassword ? 'password' : 'text'
    })
    const inputId = useGetId(id)

    const handlePasswordType = () => {
      setInputType(prev => (prev === 'text' ? 'password' : 'text'))
    }

    return (
      <div className={s.field}>
        {label && (
          <label className={s.label} htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className={s.inputWrapper}>
          <input
            className={clsx('input-reset', s.input, search && s.search, hasError && s.error)}
            id={inputId}
            ref={ref}
            type={inputType}
            {...rest}
          />
          {hasError && <div>{error}</div>}
          {togglePassword && (
            <button className={s['icon-right']} onClick={handlePasswordType} type={'button'}>
              <Icon name={inputType === 'text' ? 'common/eye' : 'common/eye-closed'} />
            </button>
          )}
          {search && (
            <>
              <Icon className={s['icon-left']} name={'common/search'} size={20} />
              <button className={s['icon-right']} onClick={onClear}>
                <Icon name={'common/close'} size={20} />
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
)
