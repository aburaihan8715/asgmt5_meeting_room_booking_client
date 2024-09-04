import CheckoutForm from '@/components/payment/CheckoutForm';
import SectionHeading from '@/components/ui/SectionHeading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_stripe_PK);

const Payment = () => {
  return (
    <section className="px-1 md:px-10">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex justify-center">
          <SectionHeading heading="Payment" />
        </div>
        <div className="w-full rounded-md shadow-lg md:px-5 md:py-20 md:w-96">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
