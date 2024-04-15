import type { Meta, StoryObj } from '@storybook/react'

import { HeaderProfile } from '.'

const meta: Meta<typeof HeaderProfile> = {
  component: HeaderProfile,
  tags: ['autodocs'],
  title: 'Components/HeaderProfile',
}

export default meta
type Story = StoryObj<typeof HeaderProfile>

export const Primary: Story = {
  render: () => <HeaderProfile />,
}
