import { SPRITES_META, SpritesMap } from '@/components/ui/icon/sprite.h'
import { IconName } from '@/components/ui/icon/types'

export const getIconMeta = <Key extends keyof SpritesMap>(name: IconName) => {
  const [spriteName, iconName] = name.split('/') as [Key, SpritesMap[Key]]
  const {
    filePath,
    items: {
      [iconName]: { height, viewBox, width },
    },
  } = SPRITES_META[spriteName]
  const axis = height === width ? 'xy' : width > height ? 'x' : 'y'

  return { axis, filePath, iconName, viewBox }
}
