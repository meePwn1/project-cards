import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'UI/Avatar',
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  render: () => (
    <Avatar
      alt={'CT'}
      size={100}
      src={'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'}
    />
  ),
}
