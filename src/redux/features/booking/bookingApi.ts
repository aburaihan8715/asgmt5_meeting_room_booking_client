import { baseApi } from '@/redux/api/baseApi';

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // CREATE
    createBookingIntoDB: builder.mutation({
      query: (data) => ({
        url: '/api/bookings',
        method: 'POST',
        body: data,
      }),
    }),

    // GET MY BOOKINGS
    getMyBookingsFromDB: builder.query({
      query: ({ page, limit }) => {
        let queryString = `/api/my-bookings`;

        const params = new URLSearchParams();

        if (page) params.append('page', page);
        if (limit) params.append('limit', limit);

        if (params.toString()) queryString += `?${params.toString()}`;

        return {
          url: queryString,
          method: 'GET',
        };
      },
    }),

    // GET ALL BOOKINGS
    getAllBookings: builder.query({
      query: ({ page, limit }) => {
        let queryString = `/api/bookings`;

        const params = new URLSearchParams();

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

export const {
  useGetAllBookingsQuery,
  useCreateBookingIntoDBMutation,
  useGetMyBookingsFromDBQuery,
} = bookingApi;
