import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Icon } from '../ui'
import { CroppedImageData } from '../ui/image-cropper'
import { FileUploaderWithImageCropper } from './FileUploaderWithImageCropper'

const meta: Meta<typeof FileUploaderWithImageCropper> = {
  component: FileUploaderWithImageCropper,
  tags: ['autodocs'],
  title: 'Components/FileUploaderWithImageCropper',
}

export default meta
type Story = StoryObj<typeof FileUploaderWithImageCropper>

export const Primary: Story = {
  render: () => {
    const [croppedImageData, setCroppedImageData] = useState<CroppedImageData>(null)

    return (
      <div style={{ maxWidth: 420, width: '100%' }}>
        <FileUploaderWithImageCropper
          croppedImageData={croppedImageData}
          setCroppedImageData={setCroppedImageData}
          trigger={<Icon name={'common/edit'} />}
        />
      </div>
    )
  },
}
