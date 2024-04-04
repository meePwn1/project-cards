import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useState } from 'react'

import axios from 'axios'

import { Typography } from '..'
import { Table } from './Table'

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
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
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то. Какая-то ссылка кудато на какой-то источник с информациейо ссылка куда-то на какой-то',
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

interface Author {
  id: string
  name: string
}

interface Card {
  author: Author
  cardsCount: number
  cover: string
  created: string // Можно заменить на тип Date, если требуется
  id: string
  isPrivate: boolean
  name: string
  updated: string // Можно заменить на тип Date, если требуется
  userId: string
}

interface Pagination {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

interface ApiResponse {
  items: Card[]
  pagination: Pagination
}
const columns = [
  { label: 'Name', value: 'name' },
  { label: 'Cards', value: 'cardsCount' },
  { label: 'Last Updated', value: 'updated' },
  { label: 'Created by', value: 'author.name' },
]

export const SortableTable: Story = {
  args: {},
  render: args => {
    const [decs, setDecs] = useState<Card[]>([])
    const [sort, setSort] = useState<{
      activeColumn: string
      direction: 'asc' | 'desc'
      orderBy: string
    } | null>(null)

    useEffect(() => {
      axios
        .get<ApiResponse>('https://api.flashcards.andrii.es/v2/decks', {
          headers: {
            'x-auth-skip': true,
          },
          params: {
            orderBy: sort?.orderBy,
          },
        })
        .then(res => setDecs(res.data.items))
    }, [sort?.orderBy])

    return (
      <Table.Root {...args}>
        <Table.Head>
          <Table.Row>
            {columns.map(item => {
              return (
                <Table.SortableHeadCell column={item} key={item.label} onSort={setSort} sort={sort}>
                  <Typography variant={'subtitle2'}></Typography>
                </Table.SortableHeadCell>
              )
            })}
          </Table.Row>
        </Table.Head>
      </Table.Root>
    )
  },
}
