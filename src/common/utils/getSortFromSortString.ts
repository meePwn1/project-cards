import { SortType } from '@/components/ui/table-header'

export const getSortFromSortString = (sortString: null | string) => {
  if (!sortString) {
    return null
  }

  return {
    direction: sortString.split('-')[1],
    sortBy: sortString.split('-')[0],
  } as SortType
}
