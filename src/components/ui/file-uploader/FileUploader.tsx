import { ChangeEvent, useRef } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'

import { Icon, IconName } from '..'

type Props = {
  accept?: string
  className?: string
  fullWidth?: boolean
  icon?: IconName
  name: string
  setFile: (file: File | null) => void
  text?: string
  variant?: 'icon' | 'primary' | 'secondary'
}

export const FileUploader = (props: Props) => {
  const {
    accept = 'image/*,.png,.jpg,.jpeg,.webp',
    className,
    fullWidth,
    icon = 'common/edit',
    name,
    setFile,
    text,
    variant = 'secondary',
  } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    e.target.value = ''

    if (file && file.size <= 1024 * 1024) {
      setFile(file)
    } else {
      toast.error('Max image size is 1MB')
    }
  }

  return (
    <>
      <Button
        className={className}
        fullWidth={fullWidth}
        onClick={() => inputRef.current?.click()}
        type={'button'}
        variant={variant}
      >
        <Icon name={icon} />
        {text ?? text}
      </Button>
      <input
        accept={accept}
        hidden
        name={name}
        onChange={handleChange}
        ref={inputRef}
        style={{ display: 'none' }}
        type={'file'}
      />
    </>
  )
}
