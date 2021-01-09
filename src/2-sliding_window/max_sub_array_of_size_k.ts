// https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP

const max_sub_array_of_size_k = function (k: number, arr: number[]) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      // Subtract element that is leaving the window
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return maxSum;
};

console.log(max_sub_array_of_size_k(3, [1, 4, 3, 2, 1]));
