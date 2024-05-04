import { useSearchParams } from 'react-router-dom'

import { PARAMS } from '@/common/constants'
import { Button, Icon, Slider, TabType, Tabs, TextField, Typography } from '@/components/ui'
import { useGetMinMaxCardsQuery } from '@/services/decks'

import s from './DeckFilters.module.scss'

const tabs: TabType[] = [
  { title: 'My cards', value: 'my' },
  { title: 'All cards', value: '' },
]

type Props = {
  maxCardsCount?: number
  minCardsCount?: number
  search: string
  sliderValues: number[]
  tabValue: string
}
export const DeckFilters = ({
  maxCardsCount,
  minCardsCount,
  search,
  sliderValues,
  tabValue,
}: Props) => {
  const { data: minMaxCards } = useGetMinMaxCardsQuery()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChangeSearchValue = (searchValue: string) => {
    if (searchValue) {
      searchParams.set(PARAMS.SEARCH, searchValue)
    } else {
      searchParams.delete(PARAMS.SEARCH)
    }
    setSearchParams(searchParams)
  }
  const handleChangeTabValue = (tabValue: string) => {
    if (tabValue) {
      searchParams.set(PARAMS.TAB, tabValue)
    } else {
      searchParams.delete(PARAMS.TAB)
    }
    searchParams.delete(PARAMS.SEARCH)
    searchParams.delete(PARAMS.MIN)
    searchParams.delete(PARAMS.MAX)
    searchParams.delete(PARAMS.PAGE)
    setSearchParams(searchParams)
  }

  const handleChangeSliderValues = (sliderValues: number[]) => {
    if (sliderValues[0] !== minMaxCards?.min) {
      searchParams.set(PARAMS.MIN, sliderValues[0].toString())
    } else {
      searchParams.delete(PARAMS.MIN)
    }
    if (sliderValues[1] !== minMaxCards?.max) {
      searchParams.set(PARAMS.MAX, sliderValues[1].toString())
    } else {
      searchParams.delete(PARAMS.MAX)
    }
    setSearchParams(searchParams)
  }

  const handleClearFilter = () => {
    setSearchParams({})
  }

  return (
    <div className={s.filterActions}>
      <TextField
        onValueChange={handleChangeSearchValue}
        placeholder={'Search...'}
        search
        value={search}
      />
      <Tabs
        label={'Show decks cards'}
        onValueChange={handleChangeTabValue}
        tabs={tabs}
        value={tabValue}
      />
      <Slider
        label={'Number of cards'}
        max={maxCardsCount}
        min={minCardsCount}
        onValueChange={handleChangeSliderValues}
        value={sliderValues}
      />

      <Button onClick={handleClearFilter} variant={'secondary'}>
        <Icon name={'common/trash'} size={16} />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
