const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4);
});

test('Adds 1 + 1 to NOT equal 3', () => {
  expect(functions.add(1,1)).not.toBe(3);
});

test('Subtracts 6 - 3 to equal 3', () => {
  expect(functions.subtract(6,3)).toBe(3);
});

test('Subtracts 6 - 3 to NOT equal 4', () => {
  expect(functions.subtract(6,3)).not.toBe(4);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User should be Ruth Newman', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Ruth',
    lastName: 'Newman'
  });
});

test('Should be under 2019', () => {
  const load1 = 1988;
  const load2 = 30;
  expect(load1 + load2).toBeLessThan(2019);
})
