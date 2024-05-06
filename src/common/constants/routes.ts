export const ROUTES = {
  CARD_LEARN: (deckId: string = ':deckId') => `/decks/${deckId}/learn`,
  CARDS: (deckId: string = ':deckId') => `/decks/${deckId}`,
  CHECK_EMAIL: '/check-email',
  HOME: '/',
  NEW_PASSWORD: '/password/new',
  NOT_FOUND: '/not-found',
  PROFILE: '/profile',
  RECOVER_PASSWORD: '/password/recover',
  REST: '/*',
  SIGN_IN: '/login',
  SIGN_UP: '/register',
} as const
