import { SortType } from '../types'

export const getSortString = (sort: SortType) => {
  if (!sort) {
    return null
  }

  return `${sort.sortBy}-${sort.direction}`
}
