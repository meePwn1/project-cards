import { Card, CardsResponse, GetCardsParams, RandomCardParams, SaveGradeArgs } from '.'
import { baseApi } from '..'

const cardsService = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      createCard: build.mutation<Card, { data: FormData; id: string }>({
        invalidatesTags: ['Cards'],
        query: ({ data, id }) => ({
          body: data,
          method: 'POST',
          url: `/v1/decks/${id}/cards`,
        }),
      }),
      deleteCard: build.mutation<void, { id: string }>({
        invalidatesTags: ['Cards'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `/v1/cards/${id}`,
        }),
      }),
      getCardById: build.query<Card, { id: string }>({
        providesTags: ['Cards'],
        query: ({ id }) => {
          return {
            method: 'GET',
            url: `/v1/cards/${id}`,
          }
        },
      }),
      getCards: build.query<CardsResponse, GetCardsParams>({
        providesTags: ['Cards'],
        query: ({ id, params }) => {
          return {
            method: 'GET',
            params,
            url: `/v1/decks/${id}/cards`,
          }
        },
      }),
      getRandomCard: build.query<Card, RandomCardParams>({
        providesTags: ['Cards'],
        query: ({ id, params }) => {
          return {
            method: 'GET',
            params,
            url: `/v1/decks/${id}/learn`,
          }
        },
      }),
      saveGrade: build.mutation<Card, SaveGradeArgs>({
        invalidatesTags: ['Cards'],
        query: ({ cardId, grade, id }) => ({
          body: { cardId, grade },
          method: 'POST',
          url: `/v1/decks/${id}/learn`,
        }),
      }),
      updateCard: build.mutation<Card, { data: FormData; id: string }>({
        invalidatesTags: ['Cards'],
        query: ({ data, id }) => ({
          body: data,
          method: 'PATCH',
          url: `/v1/cards/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardByIdQuery,
  useGetCardsQuery,
  useGetRandomCardQuery,
  useSaveGradeMutation,
  useUpdateCardMutation,
} = cardsService
