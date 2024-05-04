import { baseApi } from '..'
import { Card, PostLearnParams } from './learn.types'

export const learnService = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      getLearn: build.query<Card, { id: string }>({
        providesTags: ['Learn'],
        query: ({ id }) => {
          return {
            method: 'GET',
            url: `/v1/decks/${id}/learn`,
          }
        },
      }),
      postLearn: build.mutation<Card, PostLearnParams>({
        invalidatesTags: ['Learn'],
        query: ({ cardId, grade, id }) => {
          return {
            body: { cardId, grade },
            method: 'POST',
            url: `/v1/decks/${id}/learn`,
          }
        },
      }),
    }
  },
})

export const { useGetLearnQuery, usePostLearnMutation } = learnService
