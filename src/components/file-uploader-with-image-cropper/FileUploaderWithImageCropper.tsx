import { ChangeEvent, ReactElement, SyntheticEvent, cloneElement, useRef, useState } from 'react'
import ReactCrop, { Crop, ReactCropProps, convertToPixelCrop } from 'react-image-crop'
import { toast } from 'react-toastify'

import s from './FileUploaderWithImageCropper.module.scss'

import { Dialog } from '../ui'
import { CroppedImageData } from '../ui/image-cropper'
import { centerAspectCrop } from '../ui/image-cropper/lib/centerAspectCrop'
import { getImagePreviewData } from '../ui/image-cropper/lib/get-image-preview-data'

type Props = {
  className?: string
  croppedImageData?: CroppedImageData
  setCroppedImageData?: (data: CroppedImageData) => void
  trigger: ReactElement
} & Pick<ReactCropProps, 'circularCrop' | 'ruleOfThirds'>

export const FileUploaderWithImageCropper = ({
  className,
  croppedImageData,
  setCroppedImageData,
  trigger,
  ...rest
}: Props) => {
  const [imgSrc, setImgSrc] = useState('')
  const [crop, setCrop] = useState<Crop>()
  const [modalOpen, setModalOpen] = useState(false)
  const [croppedImage, setCroppedImage] = useState<CroppedImageData>(() => croppedImageData || null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const ASPECT_RATIO = rest.circularCrop ? 1 : 16 / 9

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    e.target.value = ''
    setCrop(undefined)
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
    if (imgRef.current && crop) {
      const pixelCrop = convertToPixelCrop(crop, imgRef.current.width, imgRef.current.height)
      const data = await getImagePreviewData(imgRef.current, pixelCrop)

      setCroppedImageData?.(data) || setCroppedImage(data)
      setModalOpen(false)
    }
  }

  return (
    <>
      <Dialog
        buttonText={'Crop'}
        onConfirm={handleCropSubmit}
        onOpenChange={setModalOpen}
        open={modalOpen}
      >
        <div className={s.cropperWrapper}>
          <ReactCrop
            aspect={ASPECT_RATIO}
            crop={crop}
            minHeight={110}
            onChange={(_, percentageCrop) => setCrop(percentageCrop)}
            {...rest}
          >
            {imgSrc && (
              <img
                alt={'Upload'}
                onLoad={handleImageLoad}
                ref={imgRef}
                src={imgSrc}
                style={{ objectFit: 'cover' }}
              />
            )}
          </ReactCrop>
        </div>
      </Dialog>
      {croppedImage?.url && (
        <img alt={'cropped image'} className={s.croppedImage} src={croppedImage?.url} />
      )}
      {cloneElement(trigger, {
        className,
        onClick: () => inputRef.current?.click(),
      })}
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
