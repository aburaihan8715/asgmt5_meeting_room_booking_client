import { baseApi } from '@/redux/api/baseApi';

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // CREATE SLOT
    createSlotIntoDB: builder.mutation({
      query: (slotData) => ({
        url: '/api/slots',
        method: 'POST',
        body: slotData,
      }),
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
    }),
  }),
});

export const { useGetAllSlotsQuery, useCreateSlotIntoDBMutation } =
  roomApi;
