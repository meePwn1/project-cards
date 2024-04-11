import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '.'
import { TextField } from '..'
import { Button } from '../button'
import { ModalFooter } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'UI/Modal',
}

export default meta
type Story = StoryObj<typeof Modal>

export const ModalBase: Story = {
  args: {
    content: (
      <>
        <TextField label={'Name Pack'} placeholder={'Name'} />
        <ModalFooter
          onPrimaryButtonClick={() => {
            console.log('Hello')
          }}
          onSecondaryButtonClick={() => console.log('Hello')}
          primaryButtonLabel={'primaryButton'}
          secondaryButtonLabel={'secondaryButton'}
        />
      </>
    ),

    title: 'Add New Deck',
    triggerButton: <Button variant={'primary'}>Add New Card</Button>,
  },
}

export const ModalBaseWithOneButton: Story = {
  args: {
    content: (
      <>
        <TextField label={'Name Pack'} placeholder={'Name'} />
        <ModalFooter
          onPrimaryButtonClick={() => {
            console.log('Hello')
          }}
          primaryButtonLabel={'primaryButton'}
        />
      </>
    ),

    title: 'Add New Deck',
    triggerButton: <Button variant={'primary'}>Add New Card</Button>,
  },
}
