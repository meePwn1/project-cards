import { ChangeEvent, useRef } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'

import { Icon } from '..'

type Props = {
  accept?: string
  className?: string
  fullWidth?: boolean
  name: string
  setFile: (file: File | null) => void
  text?: string
}

export const FileUploader = (props: Props) => {
  const {
    accept = 'image/*,.png,.jpg,.jpeg,.webp',
    className,
    fullWidth,
    name,
    setFile,
    text = 'Upload file',
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
        variant={'secondary'}
      >
        <Icon name={'common/edit'} />
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
