import { SortType } from '@/components/ui/table-header'

export const getSortString = (sort: SortType) => {
  if (!sort) {
    return null
  }

  return `${sort.sortBy}-${sort.direction}`
}
