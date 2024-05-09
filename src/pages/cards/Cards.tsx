import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES, SORT_BY } from '@/common/constants'
import { TableColumn } from '@/common/types'
import { BackToPage } from '@/components/back-to-page'
import { DeleteDeckModal, EditDeckModal } from '@/components/decks/ui'
import { Page } from '@/components/layout'
import {
  Button,
  DropdownMenu,
  DropdownMenuItemWithIcon,
  Icon,
  Table,
  TextField,
  Typography,
} from '@/components/ui'
import { TableHeader } from '@/components/ui/table-header'
import {
  useDeleteDeckMutation,
  useGetCardsQuery,
  useGetDeckByIdQuery,
  useMeQuery,
  useUpdateDeckMutation,
} from '@/services'

import s from './Cards.module.scss'
const columns: TableColumn[] = [
  {
    key: SORT_BY.QUESTION,
    sortable: true,
    title: 'Question',
  },
  {
    key: SORT_BY.ANSWER,
    sortable: true,
    title: 'Answer',
  },
  {
    key: SORT_BY.UPDATED,
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: SORT_BY.GRADE,
    sortable: true,
    title: 'Grade',
  },
  {
    key: null,
    sortable: false,
    title: '',
  },
]

export const Cards = () => {
  const [openDeleteDeckModal, setOpenDeleteDeckModal] = useState(false)
  const [openEditDeckModal, setOpenEditDeckModal] = useState(false)
  const { deckId } = useParams()
  const navigate = useNavigate()

  // queries
  const { data: me } = useMeQuery()
  const { data: cards } = useGetCardsQuery({ id: deckId || '' })
  const { data: deck } = useGetDeckByIdQuery({ id: deckId || '' })
  const [deleteDeck, { isLoading: isDeleteDeckLoading }] = useDeleteDeckMutation()
  const [editDeck, { isLoading: isEditDeckLoading }] = useUpdateDeckMutation()

  const isMyDeck = me?.id === deck?.userId

  // handlers
  const handleOpenDeleteDeckModal = () => {
    setOpenDeleteDeckModal(true)
  }
  const handleDeleteDeck = () => {
    deleteDeck({ id: deck?.id || '' })
      .unwrap()
      .then(() => {
        setOpenDeleteDeckModal(false)
        toast.success(`${deck?.name} deleted successfully`)
        navigate(-1)
      })
  }
  const handleOpenEditDeckModal = () => {
    setOpenEditDeckModal(true)
  }
  const handleEditDeck = (data: FormData) => {
    editDeck({ data, id: deck?.id || '' })
      .unwrap()
      .then(() => {
        setOpenEditDeckModal(false)
        toast.success(`${deck?.name} updated successfully`)
      })
  }

  return (
    <Page pt={24}>
      <DeleteDeckModal
        deckName={deck?.name}
        isLoading={isDeleteDeckLoading}
        onConfirm={handleDeleteDeck}
        open={openDeleteDeckModal}
        setOpen={setOpenDeleteDeckModal}
      />
      <EditDeckModal
        isLoading={isEditDeckLoading}
        onSubmit={handleEditDeck}
        open={openEditDeckModal}
        setOpen={setOpenEditDeckModal}
      />
      <BackToPage className={s.back} />
      <div className={s.pageHeader}>
        <div className={s.deckInfo}>
          <Typography variant={'h1'}>{deck?.name}</Typography>
          {isMyDeck && (
            <DropdownMenu className={s.dropdown} trigger={<Icon name={'common/more'} />}>
              <DropdownMenuItemWithIcon icon={<Icon name={'common/play'} size={16} />}>
                <Typography variant={'caption'}>Learn</Typography>
              </DropdownMenuItemWithIcon>
              <DropdownMenuItemWithIcon
                icon={<Icon name={'common/edit'} size={16} />}
                onSelect={handleOpenEditDeckModal}
              >
                <Typography variant={'caption'}>Edit</Typography>
              </DropdownMenuItemWithIcon>
              <DropdownMenuItemWithIcon
                icon={<Icon name={'common/trash'} size={16} />}
                onSelect={handleOpenDeleteDeckModal}
              >
                <Typography variant={'caption'}>Delete</Typography>
              </DropdownMenuItemWithIcon>
            </DropdownMenu>
          )}
        </div>
        <Button as={Link} to={ROUTES.LEARN(deckId)}>
          Learn to Pack
        </Button>
      </div>
      {deck?.cover && (
        <div className={s.cover}>
          <img alt={'cover'} src={deck?.cover} />
        </div>
      )}

      <TextField className={s.search} placeholder={'Search by question'} search />
      <Table.Root className={s.table}>
        <TableHeader columns={columns} />
        <Table.Body></Table.Body>
      </Table.Root>
    </Page>
  )
}
