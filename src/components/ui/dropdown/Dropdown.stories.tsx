import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from '.'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/DropDown',
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Primary: Story = {
  render: () => <Dropdown />,
}
