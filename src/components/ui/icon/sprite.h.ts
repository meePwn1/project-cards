export interface SpritesMap {
  common:
    | 'arrow-back-outline'
    | 'check'
    | 'chevron'
    | 'close'
    | 'divider-horizontal'
    | 'edit'
    | 'eye'
    | 'eye-closed'
    | 'image'
    | 'log-out'
    | 'more'
    | 'play'
    | 'profile'
    | 'search'
    | 'spinner'
    | 'star'
    | 'star-border'
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
    filePath: 'common.1d737234.svg',
    items: {
      'arrow-back-outline': {
        height: 14,
        viewBox: '0 0 16 14',
        width: 16,
      },
      check: {
        height: 18,
        viewBox: '0 0 18 18',
        width: 18,
      },
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
      'divider-horizontal': {
        height: 800,
        viewBox: '0 0 15 15',
        width: 800,
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
      spinner: {
        height: 20,
        viewBox: '0 0 1792 1792',
        width: 20,
      },
      star: {
        height: 17,
        viewBox: '0 0 16 17',
        width: 16,
      },
      'star-border': {
        height: 14,
        viewBox: '0 0 14 14',
        width: 14,
      },
      trash: {
        height: 16,
        viewBox: '0 0 16 16',
        width: 16,
      },
    },
  },
}
