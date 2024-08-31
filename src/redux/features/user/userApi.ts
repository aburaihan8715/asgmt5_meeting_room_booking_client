import { baseApi } from '@/redux/api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (registerData) => ({
        url: '/api/users/register',
        method: 'POST',
        body: registerData,
      }),
    }),
  }),
});

export const { useUserRegisterMutation } = userApi;
