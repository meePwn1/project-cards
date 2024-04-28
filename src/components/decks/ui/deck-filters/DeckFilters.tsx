import { Button, Icon, Slider, TabType, Tabs, TextField, Typography } from '@/components/ui'

import s from './DeckFilters.module.scss'
type Props = {
  changeSearchValue: (newValue: string) => void
  changeSliderValue: (arr: Array<string>) => void
  changeTabsValue: (newTabValue: string) => void
  clearFilter: () => void
  params: any
}

export const DeckFilters = (props: Props) => {
  const { changeSearchValue, changeSliderValue, changeTabsValue, clearFilter, params } = props

  const newParams = Object.fromEntries(params)

  const handleChangeSearchValue = (newValue: string) => {
    changeSearchValue(newValue)
  }
  const handleChangeSliderValue = (arr: Array<number>) => {
    changeSliderValue(arr.map(el => el.toString()))
  }

  const handleChangeTabsValue = (newTabValue: string) => {
    changeTabsValue(newTabValue)
  }

  const handleClearFilter = () => {
    clearFilter()
  }

  const tabs: TabType[] = [
    { title: 'My cards', value: 'my-cards' },
    { title: 'All cards', value: '' },
  ]

  return (
    <div className={s.filterActions}>
      <TextField
        onChange={e => handleChangeSearchValue(e.target.value)}
        placeholder={'Search...'}
        search
        value={newParams.name}
      />
      <Tabs
        defaultValue={''}
        label={'Show decks cards'}
        onValueChange={value => handleChangeTabsValue(value)}
        tabs={tabs}
      />
      <Slider
        label={'Number of cards'}
        max={100}
        min={0}
        onValueChange={handleChangeSliderValue}
        value={[newParams.minCardsCount, newParams.maxCardsCount]}
      />
      <Button onClick={() => handleClearFilter()} variant={'secondary'} withIcon>
        <Icon name={'common/trash'} size={16} />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
