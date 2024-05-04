import { Deck, DecksParams, DecksResponse } from '.'
import { baseApi } from '..'

export const decksService = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      createDeck: build.mutation<Deck, FormData>({
        invalidatesTags: ['Decks'],
        query: data => ({
          body: data,
          method: 'POST',
          url: '/v1/decks',
        }),
      }),
      deleteDeck: build.mutation<Deck, { id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `/v1/decks/${id}`,
        }),
      }),
      getCurrentDeck: build.query<Deck, { id: string }>({
        providesTags: ['Decks'],
        query: ({ id }) => {
          return {
            method: 'GET',
            url: `/v1/decks/${id}`,
          }
        },
      }),
      getDecks: build.query<DecksResponse, DecksParams | void>({
        providesTags: ['Decks'],
        query: params => {
          return {
            method: 'GET',
            params: params ?? {},
            url: '/v2/decks',
          }
        },
      }),
      updateDeck: build.mutation<Deck, { data: FormData; id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ data, id }) => ({
          body: data,
          method: 'PATCH',
          url: `/v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetCurrentDeckQuery,
  useGetDecksQuery,
  useLazyGetDecksQuery,
  useUpdateDeckMutation,
} = decksService
