export interface SpritesMap {
  common:
    | 'check'
    | 'chevron'
    | 'close'
    | 'edit'
    | 'eye-closed'
    | 'eye'
    | 'image'
    | 'log-out'
    | 'more'
    | 'play'
    | 'profile'
    | 'search'
    | 'star-border'
    | 'star'
    | 'trash'
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  common: {
    filePath: 'common.a56f645a.svg',
    items: {
      check: {
        viewBox: '0 0 18 18',
        width: 18,
        height: 18,
      },
      chevron: {
        viewBox: '0 0 12 12',
        width: 12,
        height: 12,
      },
      close: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      edit: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'eye-closed': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      eye: {
        viewBox: '0 0 20 20',
        width: 20,
        height: 20,
      },
      image: {
        viewBox: '0 0 17 16',
        width: 17,
        height: 16,
      },
      'log-out': {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      more: {
        viewBox: '0 0 18 18',
        width: 18,
        height: 18,
      },
      play: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      profile: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      search: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
      'star-border': {
        viewBox: '0 0 14 14',
        width: 14,
        height: 14,
      },
      star: {
        viewBox: '0 0 16 17',
        width: 16,
        height: 17,
      },
      trash: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
    },
  },
}
