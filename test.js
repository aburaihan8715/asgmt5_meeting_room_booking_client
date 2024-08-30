const mainData = {
  data1: {
    firstName: 'Abu',
    middleName: 'Raihan',
    lastName: 'Sharif',
  },
  data2: [
    {
      name: 'Abu Raihan',
      age: 29,
      occupation: 'student',
    },
    {
      name: 'Abul',
      age: 40,
      occupation: 'teacher',
    },
    {
      name: 'Babul',
      age: 50,
      occupation: 'businessman',
    },
  ],
  data3: [5, 9, 6, 8, 10, 25],
  data4: ['Abul', 'Babul', 'Cabul', 'Dabul'],
  data5: 'Dhaka Bangladesh',
  data6: 25,
};

const { data1, data2, data3, data4, ...remainingData } = mainData;

const modifiedData = { ...remainingData };

// console.log(remainingData);
// console.log(modifiedData);
// console.log(Object.keys(data1).length);

if (data1 && Object.keys(data1).length) {
  for (const [key, value] of Object.entries(data1)) {
    modifiedData[`data1.${key}`] = value;
  }
}

console.log(modifiedData);
