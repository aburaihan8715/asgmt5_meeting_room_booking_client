import {
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import { Button } from '../ui/button';
import { FormEvent } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: FormEvent) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
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
          disabled={!stripe}
        >
          Pay
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
