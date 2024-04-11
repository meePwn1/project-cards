import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from '.'

const meta: Meta<typeof Slider> = {
  component: Slider,
  tags: ['autodocs'],
  title: 'UI/Slider',
}

export default meta
type Story = StoryObj<typeof Slider>

export const Primary: Story = {
  render: args => {
    const [value, setValue] = useState([1, 13])
    const handleValueChange = (value: number[]) => {
      setValue(value)
    }

    return (
      <Slider
        {...args}
        defaultValue={[2, 10]}
        max={15}
        min={0}
        onValueChange={handleValueChange}
        value={value}
      />
    )
  },
}
