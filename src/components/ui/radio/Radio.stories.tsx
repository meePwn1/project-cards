import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { RadioGroup } from '.'

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'UI/RadioGroup',
}

export default meta
type Story = StoryObj<typeof RadioGroup>

const options = [
  { disabled: true, label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('banana')

    return <RadioGroup onValueChange={setValue} options={options} value={value} />
  },
}
