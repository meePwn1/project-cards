export interface SpritesMap {
  common:
    | 'arrow-back-outline'
    | 'check'
    | 'chevron'
    | 'close'
    | 'divider-horizontal'
    | 'edit'
    | 'eye-closed'
    | 'eye'
    | 'image'
    | 'log-out'
    | 'more'
    | 'play'
    | 'profile'
    | 'search'
    | 'spinner'
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
    filePath: 'common.1d737234.svg',
    items: {
      'arrow-back-outline': {
        viewBox: '0 0 16 14',
        width: 16,
        height: 14,
      },
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
      'divider-horizontal': {
        viewBox: '0 0 15 15',
        width: 800,
        height: 800,
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
      spinner: {
        viewBox: '0 0 1792 1792',
        width: 20,
        height: 20,
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
