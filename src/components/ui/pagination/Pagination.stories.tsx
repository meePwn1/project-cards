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
const perPageOptions = [10, 20, 30, 40, 50, 100]

export const Primary: Story = {
  render: args => {
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)

    return (
      <div>
        <Pagination
          {...args}
          count={100}
          onPageChange={setPage}
          onPerPageChange={setPerPage}
          page={page}
          perPage={perPage}
          perPageOptions={perPageOptions}
        />
        <div>Current page: {page}</div>
        <div>Per page: {perPage}</div>
      </div>
    )
  },
}
