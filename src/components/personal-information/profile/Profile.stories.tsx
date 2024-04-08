import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from './Profile'

const meta: Meta<typeof Profile> = {
  component: Profile,
  tags: ['autodocs'],
  title: 'Components/Profile',
}

export default meta
type Story = StoryObj<typeof Profile>

export const Primary: Story = {
  render: () => {
    return (
      <div style={{ margin: '0 auto', maxWidth: 420 }}>
        <Profile />
      </div>
    )
  },
}
