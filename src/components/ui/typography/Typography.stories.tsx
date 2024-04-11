import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui'

const meta: Meta<typeof Typography> = {
  component: Typography,
  tags: ['autodocs'],
  title: 'UI/Typography',
}

export default meta
type Story = StoryObj<typeof Typography>

const AllTypography = () => {
  return (
    <>
      <Typography variant={'h1'}>Heading 1</Typography>
      <Typography variant={'h2'}>Heading 2</Typography>
      <Typography variant={'h3'}>Heading 3</Typography>
      <Typography variant={'h4'}>Heading 4</Typography>
      <Typography variant={'subtitle1'}>Subtitle 1</Typography>
      <Typography variant={'subtitle2'}>Subtitle 2</Typography>
      <Typography variant={'body1'}>Body 1</Typography>
      <Typography variant={'body2'}>Body 2</Typography>
      <Typography variant={'caption'}>Caption</Typography>
      <Typography variant={'overline'}>Overline</Typography>
      <Typography variant={'error'}>Error</Typography>
      <Typography href={'google'} target={'_blank'} variant={'link1'}>
        Link 1
      </Typography>
      <Typography href={'google'} target={'_blank'} variant={'link2'}>
        Link 2
      </Typography>
    </>
  )
}

export const Primary: Story = {
  render: () => <AllTypography />,
}
