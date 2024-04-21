import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Modal } from '.'
import { Button } from '..'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'UI/Modal',
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    title: 'Add New Deck',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>open modal</Button>
        <Modal onOpenChange={setOpen} open={open} {...args}></Modal>
      </>
    )
  },
}
