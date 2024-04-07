import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '.'

const meta: Meta<typeof SignIn> = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Auth/SignIn',
}

export default meta
type Story = StoryObj<typeof SignIn>

export const Primary: Story = {
  render: () => {
    return (
      <div style={{ margin: '0 auto', maxWidth: 420 }}>
        <SignIn />
      </div>
    )
  },
}
