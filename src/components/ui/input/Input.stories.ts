import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components/ui/input/Input'

const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    label: 'some label',
    placeholder: 'Input',
    search: false,
    togglePassword: false,
  },
}
export const Password: Story = {
  args: {
    disabled: false,
    label: 'some label',
    placeholder: 'Input',
    search: false,
    togglePassword: true,
  },
}

export const Search: Story = {
  args: {
    disabled: false,
    label: 'some label',
    placeholder: 'Input',
    search: true,
  },
}
export const Error: Story = {
  args: {
    disabled: false,
    error: 'Error!',
    hasError: true,
    label: 'some label',
    placeholder: 'Input',
    search: false,
    togglePassword: false,
  },
}
