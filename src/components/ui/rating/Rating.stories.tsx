import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

// @ts-ignore
import { Rating } from '@/components/ui'

const meta: Meta<typeof Rating> = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
}

export default meta
type Story = StoryObj<typeof Rating>

export const Primary: Story = {
  render: args => {
    const [value, setValue] = useState(1)

    return <Rating {...args} value={1} />
  },
}
