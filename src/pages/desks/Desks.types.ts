export type Author = {
  id: string
  name: string
}

export type Deck = {
  author: Author
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type DesksResponse = {
  items: Deck[]
  maxCardsCount: number
  pagination: Pagination
}

export type GetDesksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type CreateDeckArg = {
  cover?: string
  isPrivate?: boolean
  name: string
}

export type RemoveDeskArg = {
  id: string
}
export type PatchDeskArg = {
  cover?: string
  id: string
  isPrivate?: boolean
  name?: string
}
