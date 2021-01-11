// https://www.educative.io/courses/grokking-the-coding-interview/YQ8N2OZq0VM

const find_string_anagrams = function (str: string, pattern: string): number[] {
  const result_indexes: number[] = [];
  const charsLeftToMatch: Record<string, number> = {};
  let numLeftToMatch = pattern.length;
  let windowLeft = 0;

  // Build pattern hashmap that will keep track of pattern left to match
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (char in charsLeftToMatch) {
      charsLeftToMatch[char]++;
    } else {
      charsLeftToMatch[char] = 0;
    }
  }

  for (let windowRight = 0; windowRight < str.length; windowRight++) {
    const charRight = str[windowRight];

    if (charRight in charsLeftToMatch) {
      // Char matches something left to match against.
      charsLeftToMatch[charRight]--;
      numLeftToMatch--;

      if (charsLeftToMatch[charRight] >= 0) {
        if (numLeftToMatch < 1) {
          result_indexes.push(windowLeft);

          // MOVE LEFT FORWARD
          const charLeft = str[windowLeft];
          charsLeftToMatch[charLeft]++;
          numLeftToMatch++;
          windowLeft++;
        }
      } else {
        // Char is in pattern, but current window contains too many iterations of it.
        // Advance the window forward until we've removed an iteration of the overmatched character.
        while (charsLeftToMatch[charRight] < 0) {
          // MOVE LEFT FORWARD
          const charLeft = str[windowLeft];
          charsLeftToMatch[charLeft]++;
          numLeftToMatch++;
          windowLeft++;
        }
      }
    } else {
      // If this character isn't even part of our anagram, move our leftbound beyond it.
      windowLeft = windowRight + 1;
    }
  }
  return result_indexes;
};
/* 
  
  string="epdpqp"
            <>
  pattern="pqd"
  Output: [1, 2]

  string="baacdc"
            <>       
  pattern="abc"

  --
  numLeftToMatch: 1
  {
    p: 0,
    q: 1,
    d: 0
  }

  return result_indexes;
};
*/

console.log(find_string_anagrams('ppqp', 'pq'), '[1,2]');
// 1hour spent, got close but it got complicated :()
