import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { FileUploaderWithPreview } from '.'
import { Card } from '../ui'

const meta: Meta<typeof FileUploaderWithPreview> = {
  component: FileUploaderWithPreview,
  tags: ['autodocs'],
  title: 'Components/FileUploaderWithPreview',
}

export default meta
type Story = StoryObj<typeof FileUploaderWithPreview>

export const Primary: Story = {
  render: () => {
    const [img, setImg] = useState<File | null>(null)

    return (
      <Card style={{ maxWidth: 420, padding: 20 }}>
        <FileUploaderWithPreview img={img} setImg={setImg} />
      </Card>
    )
  },
}
