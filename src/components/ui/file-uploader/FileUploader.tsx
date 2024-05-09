import { ChangeEvent, useRef } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'

import { Icon, IconName } from '..'

type Props = {
  accept?: string
  className?: string
  fullWidth?: boolean
  icon?: IconName
  setFile?: (file: File) => void
  setImageUrl?: (dataUrl: string) => void
  text?: string
  variant?: 'icon' | 'primary' | 'secondary'
}

export const FileUploader = (props: Props) => {
  const {
    accept = 'image/*,.png,.jpg,.jpeg,.webp',
    className,
    fullWidth,
    icon = 'common/edit',
    setFile,
    setImageUrl,
    text,
    variant = 'secondary',
  } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    e.target.value = ''

    if (file && file.size <= 5 * 1024 * 1024) {
      setFile?.(file)
      if (setImageUrl) {
        const reader = new FileReader()

        reader.onload = () => {
          const dataUrl = reader.result?.toString() || ''

          setImageUrl(dataUrl)
        }

        reader.readAsDataURL(file)
      }
    } else {
      toast.error('Max image size is 5MB')
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
        <Icon name={icon} size={16} />
        {text ?? text}
      </Button>
      <input
        accept={accept}
        hidden
        onChange={handleChange}
        ref={inputRef}
        style={{ display: 'none' }}
        type={'file'}
      />
    </>
  )
}
