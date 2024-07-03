import { toast } from 'react-toastify'

import { PayloadAction, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'

const initialState = {
  error: null as null | string,
  isInitialized: false,
  status: 'idle' as RequestStatusType,
}

export type AppInitialStateType = typeof initialState
export type RequestStatusType = 'failed' | 'idle' | 'loading' | 'succeeded'

const slice = createSlice({
  extraReducers: builder => {
    builder
      .addMatcher(isPending, (state, action) => {
        if ((action.meta.arg as { endpointName: string }).endpointName === 'me') {
          return
        }
        state.status = 'loading'
      })
      .addMatcher(isFulfilled, (state, action) => {
        state.status = 'succeeded'
      })
      .addMatcher(isRejected, (state, action: any) => {
        const errorMessage = action.payload.error
          ? action.payload.error
          : action.payload.data.message

        if (errorMessage !== 'Unauthorized') {
          toast.error(errorMessage)
        }
      })
  },
  initialState,
  name: 'app',
  reducers: {
    setAppError: (state, action: PayloadAction<{ error: null | string }>) => {
      state.error = action.payload.error
    },
    setAppInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized
    },
    setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
      state.status = action.payload.status
    },
  },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
