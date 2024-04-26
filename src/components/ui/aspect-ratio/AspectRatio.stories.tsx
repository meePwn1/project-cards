import type { Meta, StoryObj } from '@storybook/react'

import { AspectRatio } from '@/components/ui'

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
  tags: ['autodocs'],
  title: 'UI/AspectRatio',
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Primary: Story = {
  render: () => (
    <AspectRatio ratio={10 / 3}>
      <img
        alt={'img'}
        src={'https://picsum.photos/id/10/1000/600'}
        style={{ height: '100%', objectFit: 'cover', width: '100%' }}
      />
    </AspectRatio>
  ),
}
