import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { CheckedState } from '@radix-ui/react-checkbox'

import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'UI/Checkbox',
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  args: {},
  render: args => {
    const [checked, setChecked] = useState<CheckedState>(false)

    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
  },
}
