import { useCallback, useEffect, useMemo, useState } from 'react'

import { useDebounce } from '@/common/hooks/use-debounce'
import { Button, Icon, Slider, TabType, Tabs, TextField, Typography } from '@/components/ui'
import { useMeQuery } from '@/services/auth'
import { DecksParams } from '@/services/decks'

import s from './DeckFilters.module.scss'
type Props = {
  getDecks: (params: DecksParams) => void
}

export const DeckFilters = (props: Props) => {
  const { getDecks } = props

  const { data } = useMeQuery()

  const [sliderValue, setSliderValue] = useState<Array<number>>([0, 10])
  const [searchValue, setSearchValue] = useState<string>('')
  const [tabsValue, setTabsValue] = useState<string>('')
  const tabs: TabType[] = [
    { title: 'My cards', value: 'my-cards' },
    { title: 'All cards', value: '' },
  ]

  const params = useMemo(() => {
    const authorId = tabsValue ? data?.id : ''

    return {
      authorId,
      maxCardsCount: sliderValue[1],
      minCardsCount: sliderValue[0],
      name: searchValue,
    }
  }, [sliderValue, searchValue, tabsValue, data?.id])

  const debouncedGetDecks = useCallback(
    useDebounce(() => getDecks(params), 500),
    [params]
  )

  useEffect(() => {
    debouncedGetDecks()
  }, [debouncedGetDecks])

  return (
    <div className={s.filterActions}>
      <TextField onChange={e => setSearchValue(e.target.value)} placeholder={'Search...'} search />
      <Tabs
        defaultValue={''}
        label={'Show decks cards'}
        onValueChange={value => setTabsValue(value)}
        tabs={tabs}
      />
      <Slider
        label={'Number of cards'}
        max={100}
        min={0}
        onValueChange={setSliderValue}
        value={sliderValue}
      />
      <Button variant={'secondary'} withIcon>
        <Icon name={'common/trash'} size={16} />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
