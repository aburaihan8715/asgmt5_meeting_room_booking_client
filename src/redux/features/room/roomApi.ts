import { baseApi } from '@/redux/api/baseApi';

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // CREATE ROOM
    createRoomIntoDB: builder.mutation({
      query: (roomData) => ({
        url: '/api/rooms',
        method: 'POST',
        body: roomData,
      }),
      invalidatesTags: ['rooms'],
    }),

    // GET ALL
    getAllRooms: builder.query({
      query: ({
        searchQuery,
        filterByMinCapacity,
        filterByMaxPrice,
        sortByPrice,
        page,
        limit,
      }) => {
        let queryString = `/api/rooms`;

        const params = new URLSearchParams();

        if (searchQuery) params.append('searchTerm', searchQuery);
        if (filterByMinCapacity)
          params.append('capacity[gte]', filterByMinCapacity);
        if (filterByMaxPrice)
          params.append('pricePerSlot[lte]', filterByMaxPrice);
        if (sortByPrice) params.append('sort', sortByPrice);

        if (page) params.append('page', page);
        if (limit) params.append('limit', limit);

        if (params.toString()) queryString += `?${params.toString()}`;

        return {
          url: queryString,
          method: 'GET',
        };
      },

      providesTags: ['rooms'],
    }),

    // GET ONE
    getRoom: builder.query({
      query: (id) => {
        return {
          url: `/api/rooms/${id}`,
          method: 'GET',
        };
      },
    }),

    // UPDATE ONE
    updateRoom: builder.mutation({
      query: (options) => {
        return {
          url: `/api/rooms/${options.id}`,
          method: 'PUT',
          body: options.data,
        };
      },
      invalidatesTags: ['rooms'],
    }),

    // DELETE ONE
    deleteRoom: builder.mutation({
      query: (id) => {
        return {
          url: `/api/rooms/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['rooms'],
    }),
  }),
});

export const {
  useGetAllRoomsQuery,
  useGetRoomQuery,
  useCreateRoomIntoDBMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
} = roomApi;
