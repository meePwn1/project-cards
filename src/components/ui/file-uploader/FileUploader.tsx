import { ChangeEvent, useRef } from 'react'

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

    if (file) {
      setFile(file)
    }
  }

  return (
    <>
      <Button
        className={className}
        fullWidth={fullWidth}
        onClick={() => inputRef.current?.click()}
        variant={'secondary'}
        withIcon
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
        type={'file'}
      />
    </>
  )
}
