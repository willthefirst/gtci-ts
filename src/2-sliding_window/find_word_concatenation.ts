const find_word_concatenation = function (
  str: string,
  words: string[]
): number[] {
  const result_indices: number[] = [];
  const wordLength = words[0].length; // all words will have equal length
  let windowLeft = 0;
  let matches = 0;
  const matchMap: Record<string, number> = {};

  // Build the match hashmap that will track how many matches we've found of each word
  words.forEach((word) => {
    matchMap[word] = 1;
  });

  for (
    let windowRight = wordLength;
    windowRight < str.length + 1;
    windowRight += wordLength
  ) {
    const wordRight = str.substr(windowRight - wordLength, wordLength);

    matchMap[wordRight]--;

    if (matchMap[wordRight] === 0) {
      matches++;
    }

    if (matches === words.length) {
      // We found a well-formed concatenated string
      result_indices.push(windowLeft);
    }

    if (windowRight - windowLeft === wordLength * words.length) {
      const wordLeft = str.substr(windowLeft, wordLength);
      if (matchMap[wordLeft] === 0) {
        matches--;
      }
      matchMap[wordLeft]++;
      windowLeft += wordLength;
    }
  }

  return result_indices;
};

console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
