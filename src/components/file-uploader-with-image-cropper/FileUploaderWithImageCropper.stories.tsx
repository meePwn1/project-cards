import type { Meta, StoryObj } from '@storybook/react'
// @ts-ignore
import { Typography } from '@/components/ui'

const meta: Meta<typeof Typography> = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
}

export default meta
type Story = StoryObj<typeof Typography>

export const Primary: Story = {
  render: () => <Typography />,
}