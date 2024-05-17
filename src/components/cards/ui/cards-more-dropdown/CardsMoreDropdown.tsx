import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/common/constants'
import { DeleteDeckModal, EditDeckModal } from '@/components/decks/ui'
import { DropdownMenu, DropdownMenuItemWithIcon, Icon, Typography } from '@/components/ui'
import { DeckById, useDeleteDeckMutation, useUpdateDeckMutation } from '@/services'

import s from './CardsMoreDropdown.module.scss'

type Props = {
  deck?: DeckById
}

export const CardsMoreDropdown = ({ deck }: Props) => {
  const [openDeleteDeckModal, setOpenDeleteDeckModal] = useState(false)
  const [openEditDeckModal, setOpenEditDeckModal] = useState(false)
  const [deleteDeck, { isLoading: isDeleteDeckLoading }] = useDeleteDeckMutation()
  const [editDeck, { isLoading: isEditDeckLoading }] = useUpdateDeckMutation()
  const navigate = useNavigate()

  // handlers
  const handleLearnCards = () => {
    navigate(ROUTES.LEARN(deck?.id || ''))
  }

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
        navigate(-1)
        toast.success(`${deck?.name} updated successfully`)
      })
  }

  return (
    <>
      <DeleteDeckModal
        deckName={deck?.name}
        isLoading={isDeleteDeckLoading}
        onConfirm={handleDeleteDeck}
        open={openDeleteDeckModal}
        setOpen={setOpenDeleteDeckModal}
      />

      <EditDeckModal
        deck={deck}
        isLoading={isEditDeckLoading}
        onSubmit={handleEditDeck}
        open={openEditDeckModal}
        setOpen={setOpenEditDeckModal}
      />
      <DropdownMenu className={s.dropdown} trigger={<Icon name={'common/more'} />}>
        <DropdownMenuItemWithIcon
          icon={<Icon name={'common/play'} size={16} />}
          onSelect={handleLearnCards}
        >
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
    </>
  )
}
