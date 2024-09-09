import { baseApi } from '@/redux/api/baseApi';

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: '/api/payment/create-payment-intent',
        method: 'POST',
        body: data,
      }),
    }),

    createPayment: builder.mutation({
      query: (data) => ({
        url: '/api/payment/create-payment',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['payment', 'bookings'],
    }),
  }),
});

export const { useCreatePaymentIntentMutation, useCreatePaymentMutation } =
  paymentApi;
