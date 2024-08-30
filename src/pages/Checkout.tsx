import { useState } from 'react';
import Swal from 'sweetalert2';

const paymentOptions = ['Credit Card', 'PayPal', 'Bank Transfer'];

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>('');

  const bookingDetails = {
    roomName: 'Conference Room A',
    date: '2024-09-15',
    time: '10:00 AM - 12:00 PM',
    cost: 200,
    userInfo: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
    },
  };

  const handlePaymentSelection = (option: string) => {
    setSelectedPayment(option);
  };

  const handleConfirmBooking = () => {
    Swal.fire({
      title: 'Booking Confirmed!',
      text: `Thank you for your booking. You will receive an email with your booking details.`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          Booking Summary
        </h1>
        <div className="mb-6">
          <p className="text-lg">
            <strong>Room Name:</strong> {bookingDetails.roomName}
          </p>
          <p className="text-lg">
            <strong>Date:</strong> {bookingDetails.date}
          </p>
          <p className="text-lg">
            <strong>Time:</strong> {bookingDetails.time}
          </p>
          <p className="text-lg">
            <strong>Cost:</strong> ${bookingDetails.cost}
          </p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">User Information</h2>
            <p className="mt-2 text-sm">
              <strong>Name:</strong> {bookingDetails.userInfo.name}
            </p>
            <p className="text-sm">
              <strong>Email:</strong> {bookingDetails.userInfo.email}
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> {bookingDetails.userInfo.phone}
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
          <button
            onClick={handleConfirmBooking}
            className="px-6 py-3 text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
