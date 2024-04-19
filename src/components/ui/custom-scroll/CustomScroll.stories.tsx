import type { Meta, StoryObj } from '@storybook/react'

import { ScrollArea } from '.'

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
  tags: ['autodocs'],
  title: 'UI/ScrollArea',
}

export default meta
type Story = StoryObj<typeof ScrollArea>
const textMap = Array.from({ length: 100 }, (_, i) => <div key={i}>text$-{i}</div>)

export const Primary: Story = {
  render: () => (
    <ScrollArea style={{ display: 'inline-block', height: 400, paddingRight: 20 }}>
      <div>{textMap}</div>
    </ScrollArea>
  ),
}
