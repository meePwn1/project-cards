import type { Meta, StoryObj } from '@storybook/react'

import { ReadMore } from '@/components/ui'

const meta: Meta<typeof ReadMore> = {
  component: ReadMore,
  tags: ['autodocs'],
  title: 'UI/ReadMore',
}

export default meta
type Story = StoryObj<typeof ReadMore>

export const Primary: Story = {
  render: () => (
    <ReadMore
      text={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    />
  ),
}
