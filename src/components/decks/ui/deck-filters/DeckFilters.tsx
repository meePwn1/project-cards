import { ChangeEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Button, Icon, Slider, TabType, Tabs, TextField, Typography } from '@/components/ui'
import { useMeQuery } from '@/services/auth'

import s from './DeckFilters.module.scss'

export const DeckFilters = () => {
  const { data: meData } = useMeQuery()
  const [searchParams, setSearchParams] = useSearchParams()
  const searchValue = searchParams.get('name') || ''

  const [sliderValues, setSliderValues] = useState([1, 10])

  const handleSetSearchParams = (e: ChangeEvent<HTMLInputElement>) => {
    searchParams.set('name', `${e.currentTarget.value}`)
    setSearchParams(searchParams)
  }

  // const clearInputHandler = (value: string) => {
  //   searchParams.set('name', value)
  //   setSearchParams(searchParams)
  //   console.log('test')
  // }

  const clearInputHandler = () => {
    searchParams.delete('name')
    setSearchParams(searchParams)
  }

  const handleSetTabsParams = (is: string) => {
    is ? searchParams.set('authorId', `${meData?.id}`) : searchParams.delete('authorId')

    setSearchParams(searchParams)
  }

  const handleChangeSliderValue = (values: number[]) => {
    setSliderValues(values)
  }

  const handleCommitSliderValue = (values: number[]) => {
    // searchParams.set('currentPage', `1`)
    searchParams.set('minCardsCount', `${values[0]}`)
    searchParams.set('maxCardsCount', `${values[1]}`)
    setSearchParams(searchParams)
  }

  const handleClearFilter = () => {
    setSearchParams({})
    setSliderValues([1, 10])
  }

  const tabs: TabType[] = [
    { title: 'My cards', value: 'my-cards' },
    { title: 'All cards', value: '' },
  ]

  return (
    <div className={s.filterActions}>
      <TextField
        onChange={handleSetSearchParams}
        onClear={clearInputHandler}
        placeholder={'Search...'}
        search
        value={searchValue}
      />
      <Tabs
        defaultValue={''}
        label={'Show decks cards'}
        onValueChange={value => handleSetTabsParams(value)}
        tabs={tabs}
      />
      <Slider
        label={'Number of cards'}
        max={100}
        min={0}
        onValueChange={handleChangeSliderValue}
        onValueCommit={handleCommitSliderValue}
        value={sliderValues}
      />

      <Button onClick={() => handleClearFilter()} variant={'secondary'}>
        <Icon name={'common/trash'} size={16} />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
