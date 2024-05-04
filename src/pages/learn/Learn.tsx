import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Page } from '@/components/layout'
import { Button, Card, Icon, RadioGroup, Typography } from '@/components/ui'
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
    <div className={s.learn}>
      <Link className={s.backLink} to={'/'}>
        <Icon height={10} name={'common/arrow-back-outline'} /> Back to Decks List
      </Link>

      <Page centered pt={36}>
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
          <Typography variant={'body2'}>
            This deck is empty, there is nothing to learn here.
          </Typography>
        )}
      </Page>
    </div>
  )
}
