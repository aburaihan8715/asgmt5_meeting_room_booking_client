import CheckoutForm from '@/components/payment/CheckoutForm';
import SectionHeading from '@/components/common/SectionHeading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_stripe_PK);

const Payment = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
      <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-xl dark:bg-gray-800">
        <div className="mb-4 flex justify-center">
          <SectionHeading heading="Payment" />
        </div>
        <div className="w-[280px]">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
