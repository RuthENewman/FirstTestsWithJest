const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4);
});

test('Subtracts 6 - 3 to equal 3', () => {
  expect(functions.subtract(6,3)).toBe(3);
});
