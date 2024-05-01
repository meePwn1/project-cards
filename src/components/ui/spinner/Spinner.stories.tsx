import { Meta, StoryObj } from '@storybook/react'

import { Spinner } from '.'

const meta = {
  argTypes: {},
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI/Spinner',
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
