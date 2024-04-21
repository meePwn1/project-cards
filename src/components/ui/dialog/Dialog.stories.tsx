import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Dialog } from '.'
import { Button } from '..'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  tags: ['autodocs'],
  title: 'UI/Dialog',
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  args: {
    title: 'Add New Deck',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>open dialog</Button>
        <Dialog onOpenChange={setOpen} open={open} {...args}></Dialog>
      </>
    )
  },
}
