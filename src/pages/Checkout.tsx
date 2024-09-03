import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const paymentOptions = ['AamarPay', 'PayPal', 'Stripe'];

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const user = useAppSelector((state) => state.auth.user);
  const booking = useAppSelector((state) => state.booking);

  const handlePaymentSelection = (option: string) => {
    if (option == 'AamarPay' || option == 'PayPal') {
      return Swal.fire({
        title: 'Very Sorry!',
        text: `${option} is not implemented yet. Please try stripe!`,
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }
    setSelectedPayment(option);
  };

  if (!user || !booking) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          Booking Summary
        </h1>
        <div className="mb-6">
          <p className="text-lg">
            <strong>Room Name:</strong> {booking?.roomName}
          </p>
          <p className="text-lg">
            <strong>Date:</strong> {booking?.date}
          </p>
          <p className="text-lg">
            {booking?.slotTime.map((item) => (
              <div key={item}>
                <strong>Time: </strong>
                {item}
              </div>
            ))}
          </p>
          <p className="text-lg">
            <strong>Cost:</strong> ${booking?.cost}
          </p>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">User Information</h2>
            <p className="mt-2 text-sm">
              <strong>Name:</strong> {user?.name}
            </p>
            <p className="text-sm">
              <strong>Email:</strong> {user?.email}
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> {user?.phone}
            </p>
            <p className="text-sm">
              <strong>Address:</strong> {user?.address}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Select Payment Method
          </h2>
          <div className="flex gap-4">
            {paymentOptions.map((option) => (
              <button
                key={option}
                onClick={() => handlePaymentSelection(option)}
                className={`px-4 py-2 rounded-md ${
                  selectedPayment === option
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          {selectedPayment ? (
            <Link to="/payment">
              <Button>Go for payment</Button>
            </Link>
          ) : (
            <Button disabled className="cursor-not-allowed opacity-50">
              Go for payment
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
