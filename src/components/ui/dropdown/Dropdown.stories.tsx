import type { Meta, StoryObj } from '@storybook/react'

import { Icon, Typography } from '..'
import { DropdownMenu, DropdownMenuItemWithIcon, DropdownMenuLabel } from './Dropdown'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'UI/DropdownMenu',
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

const Avatar = () => {
  return (
    <img
      alt={'avatar'}
      src={
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWikp_4QBIO3-kDGPQ-I5TXFCqCAx8k_Vedg&usqp=CAU'
      }
      style={{ borderRadius: '50%', height: 36, overflow: 'hidden', width: 36 }}
    />
  )
}

export const More: Story = {
  args: {},
  render: args => (
    <DropdownMenu trigger={<Icon name={'common/more'} />} {...args}>
      <DropdownMenuItemWithIcon icon={<Icon name={'common/play'} size={16} />} text={'Learn'} />
      <DropdownMenuItemWithIcon icon={<Icon name={'common/edit'} size={16} />} text={'Edit'} />
      <DropdownMenuItemWithIcon icon={<Icon name={'common/trash'} size={16} />} text={'Delete'} />
    </DropdownMenu>
  ),
}

export const User: Story = {
  args: {},
  render: args => (
    <DropdownMenu trigger={<Avatar />} {...args}>
      <DropdownMenuLabel icon={<Avatar />}>
        <div>
          <Typography variant={'subtitle2'}>Deadpool</Typography>
          <Typography style={{ color: '#808080' }} variant={'caption'}>
            j&johnson@gmail.com
          </Typography>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuItemWithIcon
        icon={<Icon name={'common/edit'} size={16} />}
        text={'My Profile'}
      />
      <DropdownMenuItemWithIcon icon={<Icon name={'common/trash'} size={16} />} text={'Sign Out'} />
    </DropdownMenu>
  ),
}
