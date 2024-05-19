// import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { PARAMS, ROUTES } from '@/common/constants'
import { BackToPage } from '@/components/back-to-page'
import { CardsMoreDropdown, CardsTable, CreateNewCard, EmptyCards } from '@/components/cards/ui'
import { DeckCover } from '@/components/cards/ui/deck-cover/DeckCover'
import { Page } from '@/components/layout'
import { Button, Pagination, TextField, Typography } from '@/components/ui'
// import { Spinner } from '@/components/ui/spinner'
import { useGetCardsQuery, useGetDeckByIdQuery, useMeQuery } from '@/services'

import s from './Cards.module.scss'
import { getSortString } from '@/common/utils'
import { SortType } from '@/common/types'
import { PER_PAGE, useCardsQueryParams } from './lib'


export const Cards = () => {
  const { deckId } = useParams()


  const perPageOptions = [5, 10, 15]


  // queries
  const { data: me } = useMeQuery()
  const {page,perPage,searchParams,setSearchParams,queryParams,question,sort}=useCardsQueryParams({deckId})

  
  // const { data: cards } = useGetCardsQuery({ id: deckId || '' })
  const { data: cards}=useGetCardsQuery(queryParams)

  const { data: deck } = useGetDeckByIdQuery({ id: deckId || '' })

  const isMyDeck = me?.id === deck?.userId
  const isEmptyDeck = cards?.items?.length === 0



  const handlePageChange = (currentPage: number) => {
    
    if (currentPage > 1) {
      searchParams.set(PARAMS.PAGE, currentPage.toString())
    } else {
      searchParams.delete(PARAMS.PAGE)
    }
    setSearchParams(searchParams)
  }

  const handlePerPageChange = (perPage: number) => {
    
    if (perPage !== PER_PAGE) {
      searchParams.set(PARAMS.PER_PAGE, perPage.toString())
    } else {
      searchParams.delete(PARAMS.PER_PAGE)
    }
    setSearchParams(searchParams)
  }

  const handleQuestionChange = (question: string) => {
    
    if (question !== '') {
      searchParams.set(PARAMS.SEARCH,question )
    } else {
      searchParams.delete(PARAMS.SEARCH)
    }
    setSearchParams(searchParams)
  }

  const handleSortChange = (sort: SortType) => { 
       
    const sortString = getSortString(sort)


    if (sortString) {
      searchParams.set(PARAMS.SORTING, sortString)
    } else {
      searchParams.delete(PARAMS.SORTING)
    }
    setSearchParams(searchParams)
  }




  // if (isPageLoaded) {
  //   return (
  //     <div
  //       style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}
  //     >
  //       <Spinner size={50} />
  //     </div>
  //   )
  // }

  return (
    <Page pt={24}>
      <BackToPage className={s.back} />
      {window.innerWidth < 768 && <div>asds</div>}
      <div className={s.pageHeader}>
        <div className={s.deckInfo}>
          <Typography variant={'h1'}>{deck?.name}</Typography>
          {isMyDeck && <CardsMoreDropdown deck={deck} />}
        </div>
        {!isEmptyDeck &&
          (isMyDeck ? (
            <CreateNewCard />
          ) : (
            <Button as={Link} to={ROUTES.LEARN(deckId)}>
              Learn to Pack
            </Button>
          ))}
      </div>
      <DeckCover cover={deck?.cover} />
      <TextField onValueChange={handleQuestionChange} className={s.search} placeholder={'Search by question'} search value={question}/>
      {isEmptyDeck ? (
        <EmptyCards isMyDeck={isMyDeck} />
      ) : (
        <>
    
          <CardsTable onSort={handleSortChange} cards={cards?.items} isMyDeck={isMyDeck} sort={sort} />
        </>
      )}
      {cards?.pagination.totalItems && cards.pagination.totalPages > 1 && (
        <Pagination
          className={s.pagination}
          count={cards.pagination.totalPages}
          onPageChange={handlePageChange}
          onPerPageChange={handlePerPageChange}
          page={page}
          perPage={perPage}
          perPageOptions={perPageOptions}
        />
      )}
    </Page>
  )
}
