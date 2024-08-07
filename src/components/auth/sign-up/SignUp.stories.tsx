import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from '.'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Auth/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <div style={{ margin: '0 auto', maxWidth: 420 }}>
        <SignUp />
      </div>
    )
  },
}
