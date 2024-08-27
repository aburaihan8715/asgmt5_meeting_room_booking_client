import { FaCalendarCheck, FaCheckCircle, FaClock } from 'react-icons/fa';

export const steps = [
  {
    count: '1',
    heading: 'Select a Room',
    description:
      'Browse our selection of rooms and choose the one that fits your needs.',
    icon: <FaCalendarCheck className="w-12 h-12" />,
  },
  {
    count: '2',
    heading: 'Choose Date & Time',
    description: 'Select your preferred date and time for the booking.',
    icon: <FaClock className="w-12 h-12" />,
  },
  {
    count: '3',
    heading: 'Confirm Booking',
    description:
      'Review your details and confirm your booking to finalize the reservation.',
    icon: <FaCheckCircle className="w-12 h-12" />,
  },
];
