import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    user: 2,
  },
  {
    name: 'Feb',
    user: 5,
  },
  {
    name: 'Mar',
    user: 9,
  },
  {
    name: 'Apr',
    user: 3,
  },
  {
    name: 'May',
    user: 8,
  },
  {
    name: 'Jun',
    user: 10,
  },
  {
    name: 'Jul',
    user: 13,
  },
  {
    name: 'Aug',
    user: 10,
  },
  {
    name: 'Set',
    user: 5,
  },
  {
    name: 'Oct',
    user: 10,
  },
  {
    name: 'Nov',
    user: 6,
  },
  {
    name: 'Dec',
    user: 9,
  },
];

const date = new Date();
const currentYear = date.getFullYear();
const UserLineChart = () => {
  return (
    <div className="">
      <h2 className="mb-2 text-2xl font-medium text-gray-700">
        User analytics - {currentYear}
      </h2>
      <ResponsiveContainer width="99%" aspect={4 / 1}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="user"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserLineChart;
