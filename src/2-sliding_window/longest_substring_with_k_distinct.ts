// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80

const longest_substring_with_k_distinct = function (
  str: string,
  k: number
): number {
  let maxLength = 0;
  let distinctCount = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if (str.slice(windowStart, windowEnd).indexOf(str[windowEnd]) === -1) {
      distinctCount++;
      while (distinctCount > k && windowStart < windowEnd) {
        windowStart++;
        if (
          str.slice(windowStart + 1, windowEnd).indexOf(str[windowStart]) >= 0
        ) {
          distinctCount--;
        }
      }
    }
    maxLength = Math.max(windowEnd - windowStart + 1, maxLength);
  }

  return maxLength;
};

const test = (str: string, k: number, expected: number) => {
  const actual = longest_substring_with_k_distinct(str, k);
  console.log(actual === expected);
};

test('araaci', 2, 4);
test('araaci', 1, 2);
test('cbbebi', 3, 5);
