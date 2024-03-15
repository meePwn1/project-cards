import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'

const meta: Meta<typeof Card> = {
  component: Card,
  tags:['autodocs'],
  title: 'Components/Card',
}

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
  render: () => <Card>Card</Card>,
}
