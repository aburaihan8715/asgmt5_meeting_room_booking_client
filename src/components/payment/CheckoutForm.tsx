import {
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import { Button } from '../ui/button';
import { FormEvent, useEffect, useState } from 'react';

import { useCreatePaymentIntentMutation } from '@/redux/features/payment/paymentApi';
import { useAppSelector } from '@/redux/hooks';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const [isLoading, setIsLoading] = useState(false);
  const price = 20;

  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (price > 0) {
      const getClientSecret = async () => {
        try {
          const res = await createPaymentIntent({ price }).unwrap();
          setClientSecret(res?.data?.clientSecret || null);
        } catch (error) {
          console.error('Error getting client secret:', error);
        }
      };
      getClientSecret();
    }
  }, [createPaymentIntent, price]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements || !price || !clientSecret) {
      console.error(
        'Stripe.js has not loaded or clientSecret is missing.'
      );
      setIsLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      console.error('Card Element is not found.');
      setIsLoading(false);
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
        billing_details: {
          email: user?.email || 'unknown',
          name: user?.name || 'anonymous',
        },
      });

      if (error) {
        console.error('[Payment Method Error]', error);
        setIsLoading(false);
        return;
      }

      const { paymentIntent, error: intentError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

      if (intentError) {
        console.error('[Payment Intent Error]', intentError);
        setIsLoading(false);
        return;
      }

      if (paymentIntent?.status === 'succeeded') {
        console.log('Payment succeeded:', paymentIntent);
      }
    } catch (error) {
      console.error('Payment Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-1 overflow-hidden border rounded-md shadow">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                padding: '40px',
                lineHeight: '40px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      <div className="mt-5">
        <Button
          className="w-full text-lg"
          type="submit"
          disabled={!stripe || isLoading || !clientSecret}
        >
          {isLoading ? 'Processing...' : 'Pay'}
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
