import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '.'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Primary: Story = {
  args: {},
}
