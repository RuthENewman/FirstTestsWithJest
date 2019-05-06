const functions = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: 'Ruth' };
    user['lastName'] = 'Newman';
    return user;
  }
};

module.exports = functions;
