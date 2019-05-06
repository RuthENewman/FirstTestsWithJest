const chunkArray = (array, number) => {
  const chunkedArray = [];
  let i = 0;
  while (i < array.length) {
    chunkedArray.push(array.slice(i, i + number));
    i += number;
  }
  return chunkedArray;
}

module.exports = chunkArray;
