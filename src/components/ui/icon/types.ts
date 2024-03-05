import { SpritesMap } from '@/components/ui/icon/sprite.h'

export type IconName = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`
}[keyof SpritesMap]
