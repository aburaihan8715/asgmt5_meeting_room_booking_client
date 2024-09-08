import { baseApi } from '@/redux/api/baseApi';

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // CREATE SLOT
    createSlotIntoDB: builder.mutation({
      query: (slotData) => ({
        url: '/api/slots',
        method: 'POST',
        body: slotData,
      }),
      invalidatesTags: ['slots'],
    }),

    // GET ALL
    getAllSlots: builder.query({
      query: ({ date, room, page, limit }) => {
        let queryString = `/api/slots/availability`;

        const params = new URLSearchParams();

        if (date) params.append('date', date);
        if (room) params.append('room', room);
        if (page) params.append('page', page);
        if (limit) params.append('limit', limit);

        if (params.toString()) queryString += `?${params.toString()}`;

        return {
          url: queryString,
          method: 'GET',
        };
      },

      providesTags: ['slots'],
    }),

    // GET ONE
    getSlotFromDB: builder.query({
      query: (id) => {
        return {
          url: `/api/slots/${id}`,
          method: 'GET',
        };
      },
    }),

    // UPDATE ONE
    updateSlotIntoDB: builder.mutation({
      query: (options) => {
        return {
          url: `/api/slots/${options.id}`,
          method: 'PUT',
          body: options.data,
        };
      },
      invalidatesTags: ['slots'],
    }),

    // DELETE ONE
    deleteSlotFromDB: builder.mutation({
      query: (id) => {
        return {
          url: `/api/slots/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['slots'],
    }),
  }),
});

export const {
  useGetAllSlotsQuery,
  useCreateSlotIntoDBMutation,
  useDeleteSlotFromDBMutation,
  useUpdateSlotIntoDBMutation,
  useGetSlotFromDBQuery,
} = slotApi;
