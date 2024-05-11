import { ChangeEvent, ReactNode, SyntheticEvent, useRef, useState } from 'react'
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop'
import { toast } from 'react-toastify'

import s from './FileUploaderWithImageCropper.module.scss'

import { Button, Dialog } from '../ui'
import { CroppedImageData } from '../ui/image-cropper'
import { centerAspectCrop } from '../ui/image-cropper/lib/centerAspectCrop'
import { getImagePreviewData } from '../ui/image-cropper/lib/get-image-preview-data'

type Props = {
  croppedImageData?: CroppedImageData
  setCroppedImageData?: (data: CroppedImageData) => void
  trigger?: ReactNode
}

const ASPECT_RATIO = 16 / 9

export const FileUploaderWithImageCropper = ({
  croppedImageData,
  setCroppedImageData,
  trigger,
}: Props) => {
  const [imgSrc, setImgSrc] = useState('')
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [modalOpen, setModalOpen] = useState(false)
  const [croppedImage, setCroppedImage] = useState<CroppedImageData>(() => croppedImageData || null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    e.target.value = ''
    setImgSrc('')
    if (file && file.size <= 5 * 1024 * 1024) {
      const reader = new FileReader()

      reader.onload = () => {
        const dataUrl = reader.result?.toString() || ''

        setImgSrc(dataUrl)
      }
      reader.readAsDataURL(file)
      setModalOpen(true)
    } else {
      toast.error('Max image size is 5MB')
    }
  }
  const handleImageLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const width = e.currentTarget.width
    const height = e.currentTarget.height

    setCrop(centerAspectCrop(width, height, ASPECT_RATIO))
  }
  const handleCropSubmit = async () => {
    if (imgRef.current && completedCrop) {
      const data = await getImagePreviewData(imgRef.current, completedCrop)

      setCroppedImageData?.(data) || setCroppedImage(data)
      setModalOpen(false)
    }
  }

  return (
    <>
      <Dialog onConfirm={handleCropSubmit} onOpenChange={setModalOpen} open={modalOpen}>
        <div className={s.cropperWrapper}>
          <ReactCrop
            aspect={ASPECT_RATIO}
            crop={crop}
            keepSelection
            minHeight={110}
            onChange={(_, percentageCrop) => setCrop(percentageCrop)}
            onComplete={c => setCompletedCrop(c)}
          >
            <img
              alt={'Upload'}
              onLoad={handleImageLoad}
              ref={imgRef}
              src={imgSrc}
              style={{ maxHeight: '65svh', objectFit: 'cover' }}
            />
          </ReactCrop>
        </div>
      </Dialog>
      {croppedImage?.url && (
        <img
          alt={'cropped image'}
          src={croppedImage?.url}
          style={{ maxWidth: '100%', objectFit: 'cover', width: '100%' }}
        />
      )}
      <Button fullWidth onClick={() => inputRef.current?.click()} type={'button'} variant={'icon'}>
        {trigger || 'trigger'}
      </Button>
      <input
        accept={'image/*,.png,.jpg,.jpeg,.webp'}
        hidden
        onChange={handleInputChange}
        ref={inputRef}
        style={{ display: 'none' }}
        type={'file'}
      />
    </>
  )
}
