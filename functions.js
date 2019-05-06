const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: 'Ruth' };
    user['lastName'] = 'Newman';
    return user;
  },
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.data)
};

module.exports = functions;
