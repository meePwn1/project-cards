import { Typography } from '@/components/ui'

import s from './EmptyCards.module.scss'

import { CreateNewCard } from '..'

type Props = {
  isMyDeck?: boolean
}

export const EmptyCards = ({ isMyDeck }: Props) => {
  return (
    <>
      <div className={s.empty}>
        <Typography className={s.emptyText} variant={'body1'}>
          This pack is empty. Click add new card to fill this pack
        </Typography>
        {isMyDeck && <CreateNewCard />}
      </div>
    </>
  )
}
