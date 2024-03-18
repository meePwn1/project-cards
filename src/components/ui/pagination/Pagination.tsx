import { Icon } from '..'
import { usePagination } from './lib/use-pagination'

type PaginationProps = {
  count: number
  currentPage: number
  onPageChange: (page: number) => void
  onPerPageChange: (pageSize: number) => void
  perPage: number
  siblings?: number
}
export const Pagination = ({
  count,
  currentPage,
  onPageChange,
  onPerPageChange,
  perPage,
  siblings,
}: PaginationProps) => {
  const {
    handleNextPageChange,
    handlePageChange,
    handlePrevPageChange,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange: onPageChange,
    page: currentPage,
    siblings,
  })

  return (
    <div>
      <PrevPageButton />
      <NextPageButton />
    </div>
  )
}
const PrevPageButton = () => {
  return (
    <button>
      <Icon name={'common/chevron'} />
    </button>
  )
}
const NextPageButton = () => {
  return (
    <button>
      <Icon name={'common/chevron'} />
    </button>
  )
}
