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
    name: 'file',
    setFile: () => {},
  },
}
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    name: 'file',
    setFile: () => {},
  },
}