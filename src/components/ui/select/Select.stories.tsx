import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
}
const options = [
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Orange', value: 'orange' },
]
const paginationOptions = [
  { text: '10', value: '10' },
  { text: '20', value: '20' },
  { text: '30', value: '30' },
  { text: '50', value: '50' },
  { text: '100', value: '100' },
]

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {
  args: {
    options,
  },
}
export const PaginationSelect: Story = {
  args: {
    options: paginationOptions,
    variant: 'pagination',
  },
}
