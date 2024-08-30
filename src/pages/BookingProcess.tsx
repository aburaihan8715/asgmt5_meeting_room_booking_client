import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

import { Link } from 'react-router-dom';

interface BookingFormProps {
  user: {
    name: string;
    email: string;
    phone: string;
  };
  availableSlots: { time: string; isBooked: boolean }[];
}

const user = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '+1234567890',
};

const availableSlots = [
  { time: '09:00 AM - 10:00 AM', isBooked: false },
  { time: '10:00 AM - 11:00 AM', isBooked: true },
  { time: '11:00 AM - 12:00 PM', isBooked: false },
  { time: '12:00 PM - 01:00 PM', isBooked: true },
  // Add more slots as needed
];

const BookingForm: React.FC<BookingFormProps> = ({
  user,
  availableSlots,
}) => {
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // const handleDateChange = (date: Date) => setSelectedDate(date);

  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleTimeSelection = (time: string) => setSelectedTime(time);

  const availableTimeSlots = availableSlots.filter(
    (slot) => !slot.isBooked
  );

  return (
    <div className="min-h-screen">
      <div className="shadow-lg rounded-lg overflow-hidden">
        {/* DATE SELECTION */}
        <div className="p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Select Booking Date
          </h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        {/* TIME SLOT SELECTION */}
        <div className="p-6 sm:p-8 border-t">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Select Time Slot
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {availableTimeSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => handleTimeSelection(slot.time)}
                className={`w-full py-2 px-4 text-center rounded-lg ${
                  selectedTime === slot.time
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                } hover:bg-blue-500 hover:text-white transition duration-200`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        {/* USER INFORMATION FORM */}
        <div className="p-6 sm:p-8 border-t">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            User Information
          </h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              defaultValue={user.name}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-600"
            />
            <input
              type="email"
              defaultValue={user.email}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-600"
            />
            <input
              type="tel"
              defaultValue={user.phone}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-600"
            />
          </form>
        </div>

        {/* BOOK NOW BUTTON */}
        <div className="p-6 sm:p-8 border-t flex justify-end">
          <Link
            to="/confirmation"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const BookingProcess: React.FC = () => (
  <BookingForm user={user} availableSlots={availableSlots} />
);

export default BookingProcess;
