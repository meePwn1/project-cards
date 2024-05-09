import { PixelCrop } from 'react-image-crop'

import { canvasPreview } from '../canvas-preview'

let previewUrl = ''

function toBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
  return new Promise(resolve => {
    canvas.toBlob(resolve)
  })
}

// Returns an image source you should set to state and pass
// `{previewSrc && <img alt="Crop preview" src={previewSrc} />}`
export const getImagePreviewData = async (image: HTMLImageElement, crop: PixelCrop) => {
  const canvas = document.createElement('canvas')

  canvasPreview(image, canvas, crop)

  const blob = await toBlob(canvas)

  if (!blob) {
    console.error('Failed to create blob')

    return null
  }

  if (previewUrl) {
    URL.revokeObjectURL(previewUrl)
  }

  previewUrl = URL.createObjectURL(blob)

  return {
    blob,
    url: previewUrl,
  }
}
