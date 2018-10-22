function findLongestWordLength(str) {
  let wordLengthCount = 0;
  const wordArray = str.split(' ');

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length >= wordLengthCount) {
      wordLengthCount = wordArray[i].length;
    }
  }
  console.log(wordLengthCount);
  return wordLengthCount;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");