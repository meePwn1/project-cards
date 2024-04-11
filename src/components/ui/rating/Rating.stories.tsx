import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

// @ts-ignore
import { Rating } from '@/components/ui'

const meta: Meta<typeof Rating> = {
  component: Rating,
  tags: ['autodocs'],
  title: 'UI/Rating',
}

export default meta
type Story = StoryObj<typeof Rating>

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState(0)

    return (
      <div>
        <Rating {...args} onChange={v => setValue(v)} value={value} />
        <div>Current value: {value}</div>
      </div>
    )
  },
}

export const WithFractions: Story = {
  render: args => {
    const [value, setValue] = useState(0)
    const [hoverValue, setHoverValue] = useState<number | undefined>(0)

    return (
      <div>
        <Rating
          {...args}
          fractions={10}
          onChange={v => setValue(v)}
          onHover={v => setHoverValue(v)}
          value={value}
        />
        <div>Hover value: {hoverValue}</div>
        <div>Current value: {value}</div>
      </div>
    )
  },
}

export const Readonly: Story = {
  render: args => {
    const [value, setValue] = useState(3)

    return (
      <div>
        <Rating {...args} onChange={v => setValue(v)} readonly value={value} />
        <div>Current value: {value}</div>
      </div>
    )
  },
}
