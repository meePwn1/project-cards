import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '.'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Primary: Story = {
  render: args => {
    const [page, setPage] = useState(1)

    return <Pagination {...args} count={10} onPageChange={setPage} page={page} />
  },
}
