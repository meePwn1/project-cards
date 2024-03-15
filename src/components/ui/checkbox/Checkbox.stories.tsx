import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox, 
  tags:['autodocs'],
  title: 'Components/Checkbox',
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  render: args => {
    const [checked, setChecked] = useState(false)

    return <Checkbox {...args} checked={checked} onChange={v => setChecked(v)} />
  },
}
