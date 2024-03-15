import type { Meta, StoryObj } from '@storybook/react'

import { TabContent, TabType, Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
}

export default meta
type Story = StoryObj<typeof Tabs>
const tabs: TabType[] = [
  { title: 'My cards', value: 'my-cards' },
  { title: 'All cards', value: 'all-cards' },
  { disabled: true, title: 'Disabled cards', value: 'disabled-cards' },
]

export const Primary: Story = {
  args: {
    children: (
      <>
        <TabContent value={'my-cards'}>my cards content</TabContent>
        <TabContent value={'all-cards'}>all cards content</TabContent>
        <TabContent value={'disabled-cards'}>disabled-cards</TabContent>
      </>
    ),
    defaultValue: 'my-cards',
    tabs,
  },
}
