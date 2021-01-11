const non_repeat_substring = function (str: string) {
  let maxLength = 0;
  const charCounts = new Map();
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    const charCount = charCounts.get(str[end]);
    // Increment count for this character in dictionary if it doesn't exist
    if (!charCount) {
      charCounts.set(str[end], 1);
    } else {
      charCounts.set(str[end], charCount + 1);
      while (charCounts.get(str[end]) > 1) {
        // This is a repeat character
        charCounts.set(str[start], charCounts.get(str[start]) - 1);
        start++;
      }
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

const test = (str: string, expected: number) => {
  const actual = non_repeat_substring(str);
  console.log(actual === expected);
};

test('aabccbb', 3);
test('abbbb', 2);
test('abccde', 3);

export {};
