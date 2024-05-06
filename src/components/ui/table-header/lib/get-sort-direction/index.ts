import { SortType } from '@/common/types'

export const getSortDirection = (
  key: null | string,
  sort: SortType,
  onSort: (sort: SortType) => void
) => {
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
