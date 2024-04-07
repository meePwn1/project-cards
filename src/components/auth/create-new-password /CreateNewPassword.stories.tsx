import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from './CreateNewPassword'

const meta: Meta<typeof CreateNewPassword> = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPassword',
}

export default meta
type Story = StoryObj<typeof CreateNewPassword>

export const Primary: Story = {
  render: () => {
    return (
      <div style={{ margin: '0 auto', maxWidth: 420 }}>
        <CreateNewPassword />
      </div>
    )
  },
}
