import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '..'
import { DropdownMenu, DropdownMenuItem, DropdownMenuItemWithIcon } from './Dropdown'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Primary: Story = {
  render: () => (
    <DropdownMenu trigger={<Icon name={'common/more'} />}>
      <DropdownMenuItemWithIcon icon={<Icon name={'common/play'} size={16} />}>
        Learn
      </DropdownMenuItemWithIcon>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenu>
  ),
}
