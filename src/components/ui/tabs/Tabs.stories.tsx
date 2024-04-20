import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { TabContent, TabType, Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'UI/Tabs',
}

export default meta
type Story = StoryObj<typeof Tabs>
const tabs: TabType[] = [
  { title: 'My cards', value: 'my-cards' },
  { title: 'All cards', value: '' },
  { disabled: true, title: 'Disabled cards', value: 'disabled-cards' },
]

export const Primary: Story = {
  args: {
    children: (
      <>
        <TabContent value={'my-cards'}>my cards content</TabContent>
        <TabContent value={''}>all cards content</TabContent>
        <TabContent value={'disabled-cards'}>disabled-cards</TabContent>
      </>
    ),
    tabs,
  },
  render: args => {
    const [value, setValue] = useState('all-cards')

    return <Tabs onValueChange={setValue} value={value} {...args} />
  },
}
