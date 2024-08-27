import { FaBolt, FaCalendarAlt, FaHeadset, FaWifi } from 'react-icons/fa';

export const serviceCards = [
  {
    icon: <FaWifi className="w-12 h-12 text-indigo-500" />,
    title: 'Real-Time Availability',
    description:
      'Check room availability instantly, and never miss a slot.',
    color: 'indigo',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: <FaBolt className="w-12 h-12 text-green-500" />,
    title: 'Instant Booking',
    description:
      'Receive immediate confirmation after booking your meeting room.',
    color: 'green',
    bgColor: 'bg-green-100',
  },
  {
    icon: <FaCalendarAlt className="w-12 h-12 text-blue-500" />,
    title: 'Flexible Scheduling',
    description:
      'Book meetings at your convenience, with flexible time slots.',
    color: 'blue',
    bgColor: 'bg-blue-100',
  },
  {
    icon: <FaHeadset className="w-12 h-12 text-red-500" />,
    title: '24/7 Support',
    description:
      'Our support team is available around the clock to assist you.',
    color: 'red',
    bgColor: 'bg-red-100',
  },
];
