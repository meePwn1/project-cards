import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui'

const meta: Meta<typeof Typography.H1> = {
  component: Typography.H1,
  title: 'Components/Typography',
}

export default meta
type Story = StoryObj<typeof Typography.H1>

const AllTypography = () => {
  return (
    <>
      <Typography.H1>Heading 1</Typography.H1>
      <Typography.H2>Heading 2</Typography.H2>
      <Typography.H3>Heading 3</Typography.H3>
      <Typography.H4>Heading 4</Typography.H4>
      <Typography.Subtitle1>Subtitle 1</Typography.Subtitle1>
      <Typography.Subtitle2>Subtitle 2</Typography.Subtitle2>
      <Typography.Body1>Body 1</Typography.Body1>
      <Typography.Body2>Body 2</Typography.Body2>
      <Typography.Caption>Caption</Typography.Caption>
      <Typography.Overline>Overline</Typography.Overline>
      <Typography.Error>Error</Typography.Error>
      <Typography.Link1 href={'google'} target={'_blank'}>
        Link 1
      </Typography.Link1>
      <Typography.Link2 href={'google'} target={'_blank'}>
        Link 2
      </Typography.Link2>
    </>
  )
}

export const Primary: Story = {
  render: () => <AllTypography />,
}
