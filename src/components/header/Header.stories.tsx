import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderWithButton: Story = {
  args: {
    onButtonClick: () => {
      console.log('Hello')
    },
  },
}

export const HeaderWithAvatar: Story = {
  args: {
    withAvatar: true,
  },
}
