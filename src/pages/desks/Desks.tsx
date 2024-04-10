import { useState } from 'react'

import { Button, Table, TextField } from '@/components'
import {
  useCreateDeckMutation,
  useGetDecksQuery,
  useRemoveDeckMutation,
  useUpdateDeskMutation,
} from '@/services/decks/decks.service'

export const Desks = () => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const { data, error, isError, isLoading } = useGetDecksQuery({
    currentPage: currentPage,
    name: search,
  })

  const [createDeck, { isLoading: isDeckBeingCreated }] = useCreateDeckMutation()

  const [removeDeck, { isLoading: isDeckBeingRemoved }] = useRemoveDeckMutation()

  const [updateDesk, { isLoading: isDeckBeingUpdate }] = useUpdateDeskMutation()

  console.log(data)

  if (isLoading) {
    return <div>...Loading</div>
  }
  if (isError) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <div>
      <TextField onChange={e => setSearch(e.currentTarget.value)} search />
      <Button onClick={() => updateDesk({ id: 'clusw8csk08r5ys2fnwa7h8fd', name: 'Kirill' })}>
        update deck
      </Button>
      <Button onClick={() => removeDeck({ id: 'cluswacur08r6ys2fbu1onex9' })}>Delete deck</Button>
      <Button onClick={() => createDeck({ name: 'new desk1221' })}>create deck</Button>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell align={'center'}>Cards</Table.HeadCell>
            <Table.HeadCell>Last Updated</Table.HeadCell>
            <Table.HeadCell>Created by</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data?.items.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.cardsCount}</Table.Cell>
              <Table.Cell>{item.updated}</Table.Cell>
              <Table.Cell>{item.author.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
