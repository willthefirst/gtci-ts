// https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ

const length_of_longest_substring = function (
  arr: number[],
  k: number
): number {
  let maxLength = 0;
  let left = 0;
  let substitionsLeft = k;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) {
      substitionsLeft--;
    }

    while (substitionsLeft < 0) {
      if (arr[left] === 0) {
        substitionsLeft++;
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(
  length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
);
export {};
