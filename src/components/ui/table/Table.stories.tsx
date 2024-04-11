import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Table, Typography } from '..'
import { SortType, TableColumn, TableHeader } from '../table-header'

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'UI/Table',
}

export default meta
type Story = StoryObj<typeof Table.Root>

export const Default: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>Name</Typography>
            </Table.HeadCell>
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>Age</Typography>
            </Table.HeadCell>
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>Gender</Typography>
            </Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Typography variant={'body2'}>John</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>25</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>Male</Typography>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Typography variant={'body2'}>Jane</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>30</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>Female</Typography>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
  render: args => <Table.Root {...args} />,
}

const data = [
  {
    category: 'Основной',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    id: '01',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то',
    title: 'Web Basic',
    type: 'Читать',
  },
  {
    category: 'Основной',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    id: '02',
    link: 'Какая-то ссылка куда-то',
    title: 'Web Basic',
    type: 'Читать',
  },
  {
    category: 'Основной',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    id: '03',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то.',
    title: 'Web Basic',
    type: 'Читать',
  },
]

export const MappedTable: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Название</Table.HeadCell>
            <Table.HeadCell align={'center'}>Описание</Table.HeadCell>
            <Table.HeadCell>Ссылка</Table.HeadCell>
            <Table.HeadCell>Тип</Table.HeadCell>
            <Table.HeadCell>Вид</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.link}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
  render: args => <Table.Root {...args} />,
}

const columns: TableColumn[] = [
  { key: 'author.name', title: 'Author Name' },
  { key: 'cardsCount', sortable: true, title: 'Cards Count' },
  { key: 'created', sortable: true, title: 'Created Date' },
  { key: 'name', sortable: true, title: 'Name' },
  { key: 'updated', sortable: true, title: 'Updated Date' },
]

export const SortableTable: Story = {
  args: {},
  render: args => {
    const [sort, setSort] = useState<SortType | null>(null)

    return (
      <Table.Root {...args}>
        <TableHeader columns={columns} onSort={setSort} sort={sort} />
      </Table.Root>
    )
  },
}
