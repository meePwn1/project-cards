import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './ForgotPassword'

const meta: Meta<typeof ForgotPassword> = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
}

export default meta
type Story = StoryObj<typeof ForgotPassword>

export const Primary: Story = {
  render: () => {
    return (
      <div style={{ margin: '0 auto', maxWidth: 420 }}>
        <ForgotPassword />
      </div>
    )
  },
}
