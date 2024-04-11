import type { Meta, StoryObj } from '@storybook/react'

import { useRef, useState } from 'react'

import { TextField } from '.'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'UI/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

const baseArgs = {
  disabled: false,
  label: 'some label',
  placeholder: 'Input',
  search: false,
  togglePassword: false,
}

export const Primary: Story = {
  args: {
    ...baseArgs,
  },
}
export const Password: Story = {
  args: {
    ...baseArgs,
    togglePassword: true,
  },
}
export const Search = () => {
  const [text, setText] = useState('')
  const ref = useRef<HTMLInputElement>(null)
  const handleReset = () => {
    setText('')
    ref.current?.focus()
  }

  return (
    <TextField
      {...baseArgs}
      onChange={e => setText(e.target.value)}
      onClear={handleReset}
      ref={ref}
      search
      value={text}
    />
  )
}

export const Error: Story = {
  args: {
    ...baseArgs,
    error: 'some error',
  },
}
