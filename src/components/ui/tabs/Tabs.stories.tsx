import type { Meta, StoryObj } from '@storybook/react'

import { TabsSwitcher } from '.'

const meta: Meta<typeof TabsSwitcher> = {
  component: TabsSwitcher,
  title: 'Components/TabsSwitcher',
}

export default meta
type Story = StoryObj<typeof TabsSwitcher>

export const Primary: Story = {
  args: { orientation: 'vertical' },
}
