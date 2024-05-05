import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { BackToPage } from '@/components/back-to-page/BackToPage'
import { Page } from '@/components/layout'
import { Button, Card, RadioGroup, Typography } from '@/components/ui'
import { Option } from '@/components/ui/radio/Radio'
import { useGetCurrentDeckQuery } from '@/services/decks'
import { useGetLearnQuery, usePostLearnMutation } from '@/services/learn/learn.service'

import s from './Learn.module.scss'

export const Learn = () => {
  const { id } = useParams()

  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false)
  const [grade, setGrade] = useState<string>('1')

  const { data: deck } = useGetCurrentDeckQuery({ id: id || '' })
  const { data: learn, isError } = useGetLearnQuery({ id: id || '' })
  const [getNextQuestion] = usePostLearnMutation()

  const reteYourself: Option[] = [
    { label: 'Did not know', value: '1' },
    { label: 'Forgot', value: '2' },
    { label: 'A lot of thought', value: '3' },
    { label: 'Сonfused', value: '4' },
    { label: 'Knew the answer', value: '5' },
  ]

  const handleGetNextQuestion = () => {
    setIsShowAnswer(prevState => !prevState)
    getNextQuestion({ cardId: learn!.id, grade: +grade, id: id || '' })
  }

  const handleChangeGrade = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setGrade(e.target.value)
  }

  return (
    <Page centered pt={24}>
      <BackToPage className={s.back} />
      {!isError ? (
        <Card className={s.root}>
          <Typography className={s.title} variant={'h1'}>
            Learn “{deck?.name}”
          </Typography>
          <div className={s.exercise}>
            <Typography variant={'body1'}>
              <Typography as={'span'} variant={'subtitle1'}>
                Question:
              </Typography>
              {learn?.question}
            </Typography>
            <Typography color={'var(--color-dark-100)'} variant={'body2'}>
              Количество попыток ответов на вопрос: {learn?.shots}
            </Typography>
          </div>
          {isShowAnswer ? (
            <div>
              <Typography variant={'body1'}>
                <Typography as={'span'} variant={'subtitle1'}>
                  Answer:
                </Typography>
                {learn?.answer}
              </Typography>

              <Typography as={'span'} variant={'subtitle1'}>
                Rate yourself:
              </Typography>
              <RadioGroup
                onClick={e => handleChangeGrade(e)}
                options={reteYourself}
                value={grade}
              />
              <Button fullWidth onClick={handleGetNextQuestion} variant={'primary'}>
                Next Question
              </Button>
            </div>
          ) : (
            <Button
              fullWidth
              onClick={() => setIsShowAnswer(prevState => !prevState)}
              variant={'primary'}
            >
              Show Answer
            </Button>
          )}
        </Card>
      ) : (
        <Typography className={s.empty} variant={'body1'}>
          This deck is empty, there is nothing to learn here.
        </Typography>
      )}
    </Page>
  )
}
