import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '@/components/ui'

const meta: Meta<typeof Icon> = {
  argTypes: {
    name: {
      control: 'none',
    },
    size: {
      control: {
        type: 'number',
      },
    },
  },
  component: Icon,
  tags: ['autodocs'],
  title: 'Icons',
}

export default meta
type Story = StoryObj<typeof Icon>
export const Star: Story = { args: { color: 'red', name: 'common/star' } }
export const Search: Story = { args: { color: 'blue', name: 'common/search' } }
export const Trash: Story = { args: { color: 'blue', name: 'common/trash' } }
export const Profile: Story = { args: { color: 'blue', name: 'common/profile' } }
export const Play: Story = { args: { color: 'blue', name: 'common/play' } }
export const Chevron: Story = { args: { color: 'blue', name: 'common/chevron' } }
export const Close: Story = { args: { color: 'blue', name: 'common/close' } }
export const More: Story = { args: { color: 'blue', name: 'common/more' } }
export const Eye: Story = { args: { color: 'blue', name: 'common/eye' } }
export const EyeClosed: Story = { args: { color: 'blue', name: 'common/eye-closed' } }
export const Edit: Story = { args: { color: 'blue', name: 'common/edit' } }
export const Image: Story = { args: { color: 'blue', name: 'common/image' } }
