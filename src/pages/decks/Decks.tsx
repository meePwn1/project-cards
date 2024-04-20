import { useState } from 'react'

import { Page } from '@/components/layout'
import { Button, Icon, Slider, Table, Tabs, TextField, Typography } from '@/components/ui'
import { TableColumn, TableHeader } from '@/components/ui/table-header'
import { TabType } from '@/components/ui/tabs'

import s from './Decks.module.scss'

export const Decks = () => {
  const [sliderValue, setSliderValue] = useState([0, 10])
  const tabs: TabType[] = [
    { title: 'My cards', value: 'my-cards' },
    { title: 'All cards', value: '' },
  ]
  const columns: TableColumn[] = [
    { key: 'name', sortable: true, title: 'Name' },
    { key: 'cardsCount', sortable: true, title: 'Cards Count' },
    { key: 'updated', sortable: true, title: 'Last Updated' },
    { key: 'author.name', sortable: true, title: 'Created by' },
    { key: null, title: '' },
  ]

  return (
    <Page>
      <div className={s.pageHeader}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button>
          <Typography variant={'subtitle2'}>Add New Deck</Typography>
        </Button>
      </div>
      <div className={s.filterActions}>
        <TextField placeholder={'Search...'} search />
        <Tabs defaultValue={''} label={'Show decks cards'} tabs={tabs} />
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
      <div>
        <Table.Root>
          <TableHeader columns={columns} />
        </Table.Root>
      </div>
    </Page>
  )
}
