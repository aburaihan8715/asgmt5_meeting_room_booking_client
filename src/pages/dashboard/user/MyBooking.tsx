import React from 'react';

interface Booking {
  id: number;
  roomName: string;
  date: string;
  time: string;
  status: 'Unconfirmed' | 'Confirmed';
}

const bookings: Booking[] = [
  {
    id: 1,
    roomName: 'Conference Room A',
    date: '2024-09-15',
    time: '10:00 AM - 12:00 PM',
    status: 'Confirmed',
  },
  {
    id: 2,
    roomName: 'Meeting Room B',
    date: '2024-09-17',
    time: '2:00 PM - 4:00 PM',
    status: 'Unconfirmed',
  },
  {
    id: 3,
    roomName: 'Workshop Room C',
    date: '2024-09-20',
    time: '9:00 AM - 11:00 AM',
    status: 'Confirmed',
  },
];

const MyBookingsPage: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          My Bookings
        </h1>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="p-4 bg-gray-100 border rounded-lg"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {booking.roomName}
              </h2>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong> {booking.date}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Time:</strong> {booking.time}
              </p>
              <p
                className={`text-sm font-medium mt-2 ${
                  booking.status === 'Confirmed'
                    ? 'text-green-600'
                    : 'text-yellow-600'
                }`}
              >
                Status: {booking.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
