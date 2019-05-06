const isAnagram = (word1, word2) => {
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

module.exports = isAnagram;
