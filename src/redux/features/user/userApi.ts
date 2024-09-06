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

    // GET ALL USERS
    getAllUsers: builder.query({
      query: ({ searchQuery, page, limit }) => {
        let queryString = `/api/users`;

        const params = new URLSearchParams();

        if (searchQuery) params.append('searchTerm', searchQuery);
        if (page) params.append('page', page);
        if (limit) params.append('limit', limit);

        if (params.toString()) queryString += `?${params.toString()}`;

        return {
          url: queryString,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useUserRegisterMutation, useGetAllUsersQuery } = userApi;
