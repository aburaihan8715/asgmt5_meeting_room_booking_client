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
  }),
});

export const { useCreatePaymentIntentMutation } = paymentApi;
