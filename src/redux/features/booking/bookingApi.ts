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
      invalidatesTags: ['bookings'],
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
      providesTags: ['bookings'],
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
      providesTags: ['bookings'],
    }),

    // GET ONE
    getBookingFromDB: builder.query({
      query: (id) => {
        return {
          url: `/api/bookings/${id}`,
          method: 'GET',
        };
      },
    }),

    // UPDATE UNCONFIRMED
    updateBookingConfirmedIntoDB: builder.mutation({
      query: (options) => {
        return {
          url: `/api/bookings/${options.id}`,
          method: 'PATCH',
          body: options.data,
        };
      },
      invalidatesTags: ['bookings'],
    }),

    // DELETE ONE
    deleteBookingFromDB: builder.mutation({
      query: (id) => {
        return {
          url: `/api/bookings/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['bookings'],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useCreateBookingIntoDBMutation,
  useGetMyBookingsFromDBQuery,
  useDeleteBookingFromDBMutation,
  useUpdateBookingConfirmedIntoDBMutation,
  useGetBookingFromDBQuery,
} = bookingApi;
