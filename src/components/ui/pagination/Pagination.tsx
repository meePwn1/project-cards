import { FC } from 'react'

import clsx from 'clsx'

import s from './Pagination.module.scss'

import { Icon } from '..'
import { DOTS, usePagination } from './lib/use-pagination'

type PageButtonProps = {
  onPageChange: (page: number) => void
  page: number
  selected: boolean
}
type NavigationButtonProps = {
  disabled: boolean
  onClick: () => void
}
type PaginationProps = {
  count: number
  onPageChange: (page: number) => void
  onPerPageChange?: (pageSize: number) => void
  page: number
  perPage?: number
  siblings?: number
}
export const Pagination = ({
  count,
  onPageChange,
  onPerPageChange,
  page = 1,
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
    page,
    siblings,
  })

  return (
    <div className={s.root}>
      <PrevPageButton disabled={isFirstPage} onClick={handlePrevPageChange} />
      <PaginationPages
        currentPage={page}
        onPageChange={handlePageChange}
        paginationRange={paginationRange}
      />
      <NextPageButton disabled={isLastPage} onClick={handleNextPageChange} />
    </div>
  )
}
const Dots: FC = () => {
  return (
    <li>
      <span className={s.item}>{DOTS}</span>
    </li>
  )
}
const PageButton = ({ onPageChange, page, selected }: PageButtonProps) => {
  return (
    <li>
      <button
        className={clsx(s.item, selected && s.active)}
        onClick={() => onPageChange(page)}
        type={'button'}
      >
        {page}
      </button>
    </li>
  )
}
const PrevPageButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      <Icon className={clsx(s.prev)} name={'common/chevron'} />
    </button>
  )
}
const NextPageButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      <Icon className={s.next} name={'common/chevron'} />
    </button>
  )
}

type PaginationPagesProps = {
  currentPage: number
  onPageChange: (page: number) => void
  paginationRange: (number | string)[]
}
const PaginationPages = ({ currentPage, onPageChange, paginationRange }: PaginationPagesProps) => {
  return (
    <ul className={s.list}>
      {paginationRange.map((pageNumber, index) => {
        const isSelected = pageNumber === currentPage

        if (typeof pageNumber === 'string') {
          return <Dots key={index} />
        }

        return (
          <PageButton
            key={index}
            onPageChange={onPageChange}
            page={pageNumber}
            selected={isSelected}
          />
        )
      })}
    </ul>
  )
}
