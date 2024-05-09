import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { FileUploader } from '..'
import { ImageCropper, ImagePreviewData } from './ImageCropper'

const meta: Meta<typeof ImageCropper> = {
  component: ImageCropper,
  tags: ['autodocs'],
  title: 'UI/ImageCropper',
}

export default meta
type Story = StoryObj<typeof ImageCropper>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [imgSrc, setImgSrc] = useState<string>('')
    const [previewImageData, setPreviewImageData] = useState<ImagePreviewData>(null)

    const handleSetImageUrl = (dataUrl: string) => {
      setImgSrc(dataUrl)
      setOpen(true)
    }

    return (
      <div style={{ maxWidth: '420px', width: '100%' }}>
        {previewImageData && (
          <img alt={'preview'} src={previewImageData.url} style={{ maxWidth: '100%' }} />
        )}
        <ImageCropper
          imgSrc={imgSrc}
          open={open}
          setCroppedImageData={setPreviewImageData}
          setOpenModal={setOpen}
        />
        <FileUploader setImageUrl={handleSetImageUrl} />
      </div>
    )
  },
}
