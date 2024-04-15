import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
}

export default meta
type Story = StoryObj<typeof Header>

export const Primary: Story = {
  render: () => <Header />,
}
