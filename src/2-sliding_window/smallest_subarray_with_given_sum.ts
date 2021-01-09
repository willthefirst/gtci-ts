// https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ

const smallest_subarray_with_given_sum = function (s: number, arr: number[]) {
  let minLength = arr.length;
  let windowSum = 0;
  let windowStart = 0;

  // If the whole array sum isn't larger than s, we can stop trying immediately.
  if (arr.reduce((acc, curr) => acc + curr) < s) {
    return 0;
  }

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);

      // Shrink the window from the right and test again
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minLength;
};

const input1 = [1, 2, 3, 1];
const s1 = 3;
const expected1 = 1;
const actual1 = smallest_subarray_with_given_sum(s1, input1);
console.log(actual1 === expected1);

const input2 = [1, 1];
const s2 = 3;
const expected2 = 0;
const actual2 = smallest_subarray_with_given_sum(s2, input2);
console.log(actual2 === expected2);
