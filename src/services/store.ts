import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { baseApi } from './base-api'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type TootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
