import type { Meta, StoryObj } from '@storybook/react'

import { Login } from '.'

const meta: Meta<typeof Login> = {
  component: Login,
  tags: ['autodocs'],
  title: 'Pages/Login',
}

export default meta
type Story = StoryObj<typeof Login>

export const Default: Story = {
  render: () => {
    return <Login />
  },
}
