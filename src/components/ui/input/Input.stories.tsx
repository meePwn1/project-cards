import type { Meta, StoryObj } from '@storybook/react'

import { useRef, useState } from 'react'

import { Input } from '@/components/ui/input/Input'

const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

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
    <Input
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
