import { useSearchParams } from 'react-router-dom'

import { PARAMS } from '@/common/constants'
import { useDebounce } from '@/common/hooks'
import { getSortFromSortString } from '@/common/utils'
import { GetCardsParams } from '@/services'

export const PER_PAGE = 5

export const useCardsQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  // query params
  const question = searchParams.get(PARAMS.SEARCH) || ''
  const orderBy = searchParams.get(PARAMS.SORTING)
  const page = Number(searchParams.get(PARAMS.PAGE)) || 1
  const perPage = Number(searchParams.get(PARAMS.PER_PAGE)) || PER_PAGE
  const sort = getSortFromSortString(orderBy)

  const searchError = question.length > 30 ? 'Max length is 30' : undefined

  // debounced values
  const debouncedSearch = useDebounce<string>(question, 500)

  // query
  const queryParams: GetCardsParams['params'] = {
    currentPage: page === 1 ? undefined : page,
    itemsPerPage: perPage,
    orderBy: orderBy || undefined,
    question: debouncedSearch || undefined,
  }

  return {
    page,
    perPage,
    queryParams,
    question,
    searchError,
    sort,
  }
}
