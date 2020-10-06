//LONGEST WORD
//return the longest word in a given array

const longestWord = (str) => {
  const longestWord = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
};

console.log(longestWord("The quick brown fox jumped over the lazy dog"));

module.exports = {
  longestWord,
};
