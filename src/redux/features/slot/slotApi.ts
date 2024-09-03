import { baseApi } from '@/redux/api/baseApi';

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET ALL
    getAllSlots: builder.query({
      query: ({ date, room }) => {
        let queryString = `/api/slots/availability`;

        const params = new URLSearchParams();

        if (date) params.append('date', date);
        if (room) params.append('room', room);

        if (params.toString()) queryString += `?${params.toString()}`;

        return {
          url: queryString,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetAllSlotsQuery } = roomApi;
