export interface SpritesMap {
  common:
    | 'chevron'
    | 'close'
    | 'edit'
    | 'eye'
    | 'eye-closed'
    | 'image'
    | 'log-out'
    | 'more'
    | 'play'
    | 'profile'
    | 'search'
    | 'star'
    | 'trash'
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        height: number
        viewBox: string
        width: number
      }
    >
  }
} = {
  common: {
    filePath: 'common.ef38869c.svg',
    items: {
      chevron: {
        height: 12,
        viewBox: '0 0 12 12',
        width: 12,
      },
      close: {
        height: 16,
        viewBox: '0 0 16 16',
        width: 16,
      },
      edit: {
        height: 16,
        viewBox: '0 0 16 16',
        width: 16,
      },
      eye: {
        height: 20,
        viewBox: '0 0 20 20',
        width: 20,
      },
      'eye-closed': {
        height: 24,
        viewBox: '0 0 24 24',
        width: 24,
      },
      image: {
        height: 16,
        viewBox: '0 0 17 16',
        width: 17,
      },
      'log-out': {
        height: 16,
        viewBox: '0 0 16 16',
        width: 16,
      },
      more: {
        height: 18,
        viewBox: '0 0 18 18',
        width: 18,
      },
      play: {
        height: 16,
        viewBox: '0 0 16 16',
        width: 16,
      },
      profile: {
        height: 16,
        viewBox: '0 0 16 16',
        width: 16,
      },
      search: {
        height: 16,
        viewBox: '0 0 16 16',
        width: 16,
      },
      star: {
        height: 16,
        viewBox: '0 0 16 16',
        width: 16,
      },
      trash: {
        height: 16,
        viewBox: '0 0 16 16',
        width: 16,
      },
    },
  },
}
