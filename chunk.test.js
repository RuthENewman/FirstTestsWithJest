const chunkArray = require('./chunk');

test('chunkArray function exists', () => {
  expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with a length of 2', () => {
  const numbers = [1,4,3,2,5,3,2,4,1,6];
  const arrayLength = 2;
  const chunkedArr = chunkArray(numbers, arrayLength);
  expect(chunkedArr).toEqual([[1,4],[3,2],[5,3],[2,4],[1,6]]);
});

test('Chunk an array of 3 values with a length of 1', () => {
  const numbers = [1,2,3];
  const arrayLength = 1;
  const chunkedArr = chunkArray(numbers, arrayLength);
  expect(chunkedArr).toEqual([[1], [2], [3]]);
});
