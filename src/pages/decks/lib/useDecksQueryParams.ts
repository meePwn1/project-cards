import { useSearchParams } from 'react-router-dom'

import { PARAMS } from '@/common/constants'
import { useDebounce } from '@/common/hooks'
import { getSortFromSortString } from '@/common/utils'
import { User } from '@/services/auth'
import { DecksParams, MinMaxCards } from '@/services/decks'

export const MAX_CARDS = 61
export const MIN_CARDS = 0
export const PER_PAGE = 5

type Args = {
  me: User | undefined
  minMaxCards: MinMaxCards | undefined
}
export const useDecksQueryParams = ({ me, minMaxCards }: Args) => {
  const [searchParams, setSearchParams] = useSearchParams()

  // query params
  const search = searchParams.get(PARAMS.SEARCH) || ''
  const tabValue = searchParams.get(PARAMS.TAB) || ''
  const minCardsCount = Number(searchParams.get(PARAMS.MIN)) || minMaxCards?.min || MIN_CARDS
  const maxCardsCount = Number(searchParams.get(PARAMS.MAX)) || minMaxCards?.max || MAX_CARDS
  const orderBy = searchParams.get(PARAMS.SORTING)
  const page = Number(searchParams.get(PARAMS.PAGE)) || 1
  const perPage = Number(searchParams.get(PARAMS.PER_PAGE)) || PER_PAGE

  // mixed query params
  const sliderValues = [minCardsCount, maxCardsCount]
  const sort = getSortFromSortString(orderBy)

  // debounced values
  const debouncedSearch = useDebounce<string>(search, 500)
  const debouncedCurrentPage = useDebounce(page, 500)
  const debouncedMinCardsCount = useDebounce(minCardsCount, 500)
  const debouncedMaxCardsCount = useDebounce(maxCardsCount, 500)

  // query
  const queryParams: DecksParams = {
    authorId: tabValue ? me?.id : undefined,
    currentPage: debouncedCurrentPage === 1 ? undefined : debouncedCurrentPage,
    itemsPerPage: perPage,
    maxCardsCount: debouncedMaxCardsCount === MAX_CARDS ? undefined : debouncedMaxCardsCount,
    minCardsCount: debouncedMinCardsCount === MIN_CARDS ? undefined : debouncedMinCardsCount,
    name: debouncedSearch || undefined,
    orderBy: orderBy || undefined,
  }

  return {
    page,
    perPage,
    queryParams,
    search,
    searchParams,
    setSearchParams,
    sliderValues,
    sort,
    tabValue,
  }
}
