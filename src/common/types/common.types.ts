import { SORT_BY } from '../constants'

type Sort = (typeof SORT_BY)[keyof typeof SORT_BY]

export type TableColumn = { key: Sort | null; sortable?: boolean; title: string }

export type SortType = {
  direction: 'asc' | 'desc'
  sortBy: null | string
} | null
