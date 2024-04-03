import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '.'
import { Button } from '../button'
import { Input } from '../input'
import { ModalFooter } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
}

export default meta
type Story = StoryObj<typeof Modal>

export const ModalBase: Story = {
  args: {
    content: (
      <>
        <Input label={'Name Pack'} placeholder={'Name'} />
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

// footer: (
//   <>
//
//   </>
// ),
