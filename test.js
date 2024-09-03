import moment from 'moment';

const x = 'Sat Jun 15 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)';
const x2 = null;

const date = new Date(`${x2}`);

// Manually set the day to 25
const formattedDate = moment(date).date(25).format('YYYY-MM-DD');

console.log(formattedDate); // Outputs: 2024-06-25
