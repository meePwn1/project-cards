import { SyntheticEvent, useRef, useState } from 'react'
import ReactCrop, { Crop, PixelCrop, ReactCropProps } from 'react-image-crop'

import { Dialog } from '..'
import { centerAspectCrop } from './lib/centerAspectCrop'
import { getImagePreviewData } from './lib/get-image-preview-data'

export type ImagePreviewData = {
  blob: Blob | null
  url: string
} | null

type Props = {
  imgSrc?: string
  open?: boolean
  setCroppedImageData?: (data: ImagePreviewData) => void
  setOpenModal?: (value: boolean) => void
} & Pick<ReactCropProps, 'circularCrop' | 'ruleOfThirds'>
const ASPECT_RATIO = 16 / 9

export const ImageCropper = ({
  imgSrc,
  open,
  setCroppedImageData,
  setOpenModal,
  ...rest
}: Props) => {
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const imgRef = useRef<HTMLImageElement>(null)

  const handleImageLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const { height, width } = e.currentTarget

    setCrop(centerAspectCrop(width, height, ASPECT_RATIO))
  }

  const handleConfirm = async () => {
    if (completedCrop && imgRef.current) {
      const croppedImageUrl = await getImagePreviewData(imgRef.current, completedCrop)

      setCroppedImageData?.(croppedImageUrl)
      setOpenModal?.(false)
    }
  }

  return (
    <>
      <Dialog onConfirm={handleConfirm} onOpenChange={setOpenModal} open={open}>
        <ReactCrop
          aspect={ASPECT_RATIO}
          crop={crop}
          keepSelection
          onChange={(_, percentageCrop) => setCrop(percentageCrop)}
          onComplete={c => setCompletedCrop(c)}
          {...rest}
        >
          <img
            alt={'Upload'}
            onLoad={handleImageLoad}
            ref={imgRef}
            src={imgSrc}
            style={{ maxHeight: '70vh' }}
          />
        </ReactCrop>
      </Dialog>
    </>
  )
}
