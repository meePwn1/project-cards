import { SortBy, SortType } from '../..'

export const getSortDirection = (key: SortBy, sort: SortType, onSort: (sort: SortType) => void) => {
  switch (sort?.direction) {
    case 'asc':
      onSort({ direction: 'desc', sortBy: key })
      break
    case 'desc':
      onSort(null)
      break
    default:
      onSort({ direction: 'asc', sortBy: key })
  }
}
