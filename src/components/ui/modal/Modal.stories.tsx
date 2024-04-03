import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '.'
import { Button } from '../button'
import { Input } from '../input'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
}

export default meta
type Story = StoryObj<typeof Modal>

export const PrimaryButton: Story = {
  args: {
    content: <Input label={'Name Pack'} placeholder={'Name'} />,
    footer: (
      <>
        <Button variant={'secondary'}>Cancel</Button>
        <Button variant={'primary'}>Add New Card</Button>
      </>
    ),
    title: 'Add New Deck',
    triggerButton: <Button variant={'primary'}>Add New Card</Button>,
  },
}
