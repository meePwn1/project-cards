import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button Primary',
    disabled: false,
    variant: 'primary',
  },
}
export const DisableRipple: Story = {
  args: {
    children: 'Button Primary',
    disableRipple: true,
    disabled: false,
    variant: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    children: 'Button Secondary',
    disabled: false,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Button Primary',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'google.com',
    disabled: false,
    fullWidth: true,
    href: 'https://google.com',
    target: '_blank',
    variant: 'primary',
  },
}
