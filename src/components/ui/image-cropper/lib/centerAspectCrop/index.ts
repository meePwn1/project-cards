import { centerCrop, makeAspectCrop } from 'react-image-crop'

export const centerAspectCrop = (mediaWidth: number, mediaHeight: number, aspect: number) =>
  centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 100,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  )
