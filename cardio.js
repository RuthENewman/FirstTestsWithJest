function reverseString(string) {
  return string
    .split("")
    .reverse()
    .join("")
}

function reverseAString(string) {
    let reversedString = '';
    string.split("").forEach(letter => {
      reversedString = letter + reversedString;
    })
    return reversedString;
}

function fizzBuzz() {
  for(let i = 1; i <= 100; i ++) {
    if(i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
      console.log("Fizz");
    }
    else if (i % 5 == 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}

function chunkArray(array, arrayLength) {
  const chunkedArray = [];
  let i = 0;
  while (i < array.length) {
    chunkedArray.push(array.slice(i, i + number));
    i += number;
  }
  return chunkedArray;
}

function groupArray(array, arrayLength) {
  const chunkedArray = [];
  array.forEach(value => {
    const last = chunkedArray[chunkedArray.length - 1];

    if (!last || last.length === arrayLength) {
      chunkedArray.push([value]);
    } else {
      last.push(value);
    }
  });
  return chunkedArray;
}

function flattenArray(arrays) {
  return arrays.reduce((a, b) => a.concat(b));
}

function isAnagram(word1, word2) {
  return formatString(word1) === formatString(word2);

  function formatString(string) {
    return string
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
  }
}
