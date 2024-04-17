import { CreateDeckArg, Deck, DesksResponse, GetDesksArgs, PatchDeskArg } from '@/pages'

import { baseApi } from '../base-api'
export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDeckArg>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      getDecks: builder.query<DesksResponse, GetDesksArgs | void>({
        providesTags: ['Decks'],
        query: params => ({
          params: params ?? undefined,
          url: `v1/decks`,
        }),
      }),
      removeDeck: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Decks'],

        async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            decksService.util.updateQueryData(
              'getDecks',
              {
                currentPage: 1,
                name: '',
              },
              draft => {
                const index = draft.items.findIndex(deck => deck.id === id)

                if (index > -1) {
                  draft.items.splice(index, 1)
                }
              }
            )
          )

          try {
            await queryFulfilled
          } catch {
            patchResult.undo()
          }
        },
        query: args => ({
          method: 'DELETE',
          url: `v1/decks/${args.id}`,
        }),
      }),
      updateDesk: builder.mutation<Deck, PatchDeskArg>({
        invalidatesTags: ['Decks'],

        query: ({ id, ...args }) => ({
          body: args,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useGetDecksQuery,
  useRemoveDeckMutation,
  useUpdateDeskMutation,
} = decksService
