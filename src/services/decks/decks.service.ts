import { CreateDeckParams, Deck, DecksParams, DecksResponse, UpdateDeckParams } from '.'
import { baseApi } from '..'

export const decksService = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      createDeck: build.mutation<Deck, CreateDeckParams>({
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
      updateDeck: build.mutation<Deck, { data: UpdateDeckParams; id: string }>({
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
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService
