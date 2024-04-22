import { LoginArgs, RecoverPasswordArgs, SignUnArgs, UpdateUserDataArgs, User } from '@/pages/auth'

import { baseApi } from './../base-api'
export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<void, LoginArgs>({
        invalidatesTags: ['Me'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/auth/login`,
        }),
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        query: () => ({
          method: 'POST',
          url: '/v1/auth/logout',
        }),
      }),
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => ({
          method: 'GET',
          url: `v1/auth/me`,
        }),
      }),
      recoverPassword: builder.mutation<any, RecoverPasswordArgs>({
        invalidatesTags: ['Me'],
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/recover-password',
        }),
      }),
      singUp: builder.mutation<User, SignUnArgs>({
        invalidatesTags: ['Me'],
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
      updateUserData: builder.mutation<any, UpdateUserDataArgs>({
        invalidatesTags: ['Me'],
        query: args => ({
          body: args,
          method: 'PATCH',
          url: '/v1/auth/me',
        }),
      }),
    }
  },
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useRecoverPasswordMutation,
  useSingUpMutation,
  useUpdateUserDataMutation,
} = authService
