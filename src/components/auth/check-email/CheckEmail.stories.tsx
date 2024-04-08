import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from '.'

const meta: Meta<typeof CheckEmail> = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Auth/CheckEmail',
}

export default meta
type Story = StoryObj<typeof CheckEmail>

export const Default: Story = {
  render: () => {
    return (
      <div style={{ margin: '0 auto', maxWidth: 420 }}>
        <CheckEmail />
      </div>
    )
  },
}
