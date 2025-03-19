import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    booking: 2,
  },
  {
    name: 'Feb',
    booking: 5,
  },
  {
    name: 'Mar',
    booking: 9,
  },
  {
    name: 'Apr',
    booking: 3,
  },
  {
    name: 'May',
    booking: 8,
  },
  {
    name: 'Jun',
    booking: 10,
  },
  {
    name: 'Jul',
    booking: 13,
  },
  {
    name: 'Aug',
    booking: 10,
  },
  {
    name: 'Set',
    booking: 5,
  },
  {
    name: 'Oct',
    booking: 10,
  },
  {
    name: 'Nov',
    booking: 6,
  },
  {
    name: 'Dec',
    booking: 9,
  },
];

const date = new Date();
const currentYear = date.getFullYear();

const BookingBarChart = () => {
  return (
    <div>
      <h2 className="mb-2 text-2xl font-medium text-gray-700">
        Total Bookings - {currentYear}
      </h2>

      <ResponsiveContainer width="99%" height={250}>
        <BarChart data={data}>
          <Tooltip
            contentStyle={{ background: 'white', borderRadius: '5px' }}
          />
          <Bar dataKey="booking" fill="#8884d8" />
          <XAxis dataKey="name" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingBarChart;
