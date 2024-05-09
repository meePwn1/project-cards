import { useState } from 'react'

import imagePlaceholder from '@/assets/image-placeholder.png'
import clsx from 'clsx'

import s from './FileUploaderWithPreview.module.scss'

import { AspectRatio, Button, FileUploader, Icon } from '../ui'
type Props = {
  img: File | null
  setImg: (file: File | null) => void
}
const DEFAULT_RATIO = 300 / 180

export const FileUploaderWithPreview = ({ img, setImg }: Props) => {
  const [ratio, setRatio] = useState(DEFAULT_RATIO)

  const handleDeleteFile = () => {
    setRatio(DEFAULT_RATIO)
    setImg(null)
  }
  const handleSetImage = (file: File | null) => {
    setRatio(DEFAULT_RATIO)
    setImg(file)
  }
  const handleImageClick = () => {
    if (img) {
      const image = new Image()

      image.src = URL.createObjectURL(img)
      image.onload = () => {
        const width = image.width
        const height = image.height
        const currentRatio = width / height

        setRatio(prev => (prev === DEFAULT_RATIO ? currentRatio : DEFAULT_RATIO))
      }
    }
  }

  const imgSrc = img ? URL.createObjectURL(img) : imagePlaceholder

  return (
    <div>
      <AspectRatio
        className={clsx(s.imageWrapper, img && s.clickable)}
        onClick={handleImageClick}
        ratio={ratio}
      >
        {<img alt={'img'} className={s.image} src={imgSrc} />}
      </AspectRatio>
      <div className={clsx(s.controlButtons, img && s.flex)}>
        {img && (
          <Button onClick={handleDeleteFile} type={'button'} variant={'secondary'}>
            <Icon name={'common/trash'} />
            Delete file
          </Button>
        )}
        <FileUploader fullWidth={!img} setFile={handleSetImage} text={'Upload file'} />I
      </div>
    </div>
  )
}
