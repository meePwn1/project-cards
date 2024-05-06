import { Pagination } from '../decks'

export type Card = {
  answer: string
  answerImg: string
  answerVideo: string
  /** @format date-time */
  created: string
  deckId: string
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  /** @format date-time */
  updated: string
  userId: string
}

export type CardsResponse = {
  items: Card[]
  pagination: Pagination
}

export type CreateCardParams = {
  /**
   * @minLength 3
   * @maxLength 500
   */
  answer: string
  /**
   * @minLength 0
   * @maxLength 0
   */
  answerImg?: string
  /**
   * @minLength 3
   * @maxLength 500
   */
  answerVideo?: string
  /**
   * @minLength 3
   * @maxLength 500
   */
  question: string
  /**
   * @minLength 0
   * @maxLength 0
   */
  questionImg?: string
  /**
   * @minLength 3
   * @maxLength 500
   */
  questionVideo?: string
}

export type SaveGradeArgs = {
  cardId: string
  /**
   * @min 1
   * @max 5
   */
  grade: number
  id: string
}

export type RandomCardParams = {
  id: string
  params?: { previousCardId?: string }
}
export type GetCardsParams = {
  id: string
  params?: {
    /**
     * @minLength 1
     * @maxLength 30
     */
    answer?: string
    currentPage?: number
    itemsPerPage?: number
    orderBy?: null | string
    /**
     * @minLength 1
     * @maxLength 30
     */
    question?: string
  }
}

export type PostLearnParams = {
  cardId: string
  grade: number
  id: string
}
