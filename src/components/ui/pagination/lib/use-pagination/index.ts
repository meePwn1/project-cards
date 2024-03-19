import { useCallback, useMemo } from 'react'

// original code: https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
type PaginationRange = ('...' | number)[]
const range = (start: number, end: number) => {
  const length = end - start + 1

  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start)
}

export const DOTS = '...'

type UsePaginationParamType = {
  count: number
  onChange: (pageNumber: number) => void
  page: number
  siblings?: number
}

export const usePagination = ({ count, onChange, page, siblings = 1 }: UsePaginationParamType) => {
  const paginationRange = useMemo(() => {
    // Pages count is determined as siblings + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblings + 5

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..count]
    */
    if (totalPageNumbers >= count) {
      return range(1, count)
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and count
    */
    const leftSiblingIndex = Math.max(page - siblings, 1)
    const rightSiblingIndex = Math.min(page + siblings, count)

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and count. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < count - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < count - 2

    const firstPageIndex = 1
    const lastPageIndex = count

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblings
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, count]
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblings
      const rightRange = range(count - rightItemCount + 1, count)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    /*
    	Case 4: Both left and right dots to be shown 
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [count, page, siblings]) as PaginationRange

  const lastPage = paginationRange[paginationRange.length - 1]

  const isFirstPage = page === 1
  const isLastPage = page === lastPage

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      onChange(pageNumber)
    },
    [onChange]
  )
  const handlePrevPageChange = useCallback(() => {
    onChange(page - 1)
  }, [page, onChange])
  const handleNextPageChange = useCallback(() => {
    onChange(page + 1)
  }, [page, onChange])

  return {
    handleNextPageChange,
    handlePageChange,
    handlePrevPageChange,
    isFirstPage,
    isLastPage,
    paginationRange,
  }
}
