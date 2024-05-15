import { onQueryStartedErrorToast } from '@/common/utils/onQueryStartedError'

import { LoginArgs, RecoverPasswordArgs, SignUnArgs, User } from '.'
import { baseApi } from './../base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<void, LoginArgs>({
        invalidatesTags: ['Me'],
        onQueryStarted: onQueryStartedErrorToast,
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/auth/login`,
        }),
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        onQueryStarted: onQueryStartedErrorToast,
        query: () => ({
          method: 'POST',
          url: '/v1/auth/logout',
        }),
      }),
      me: builder.query<User, void>({
        onQueryStarted: onQueryStartedErrorToast,
        providesTags: ['Me'],
        query: () => ({
          method: 'GET',
          url: `v1/auth/me`,
        }),
      }),
      recoverPassword: builder.mutation<any, RecoverPasswordArgs>({
        invalidatesTags: ['Me'],
        onQueryStarted: onQueryStartedErrorToast,

        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/recover-password',
        }),
      }),
      singUp: builder.mutation<User, SignUnArgs>({
        invalidatesTags: ['Me'],
        onQueryStarted: onQueryStartedErrorToast,
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
      updateUserData: builder.mutation<User, FormData>({
        invalidatesTags: ['Me'],
        onQueryStarted: onQueryStartedErrorToast,
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
