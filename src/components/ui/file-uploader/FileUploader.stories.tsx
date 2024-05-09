import type { Meta, StoryObj } from '@storybook/react'

import { FileUploader } from '.'

const meta: Meta<typeof FileUploader> = {
  component: FileUploader,
  tags: ['autodocs'],
  title: 'UI/FileUploader',
}

export default meta
type Story = StoryObj<typeof FileUploader>

export const Default: Story = {
  args: {
    setFile: () => {},
    text: 'Upload file',
  },
}
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    setFile: () => {},
    text: 'Upload file',
  },
}

export const Icon: Story = {
  args: {
    setFile: () => {},
    variant: 'icon',
  },
}
