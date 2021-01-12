const pair_with_targetsum = function (arr: number[], target_sum: number) {
  let right = arr.length - 1,
    left = 0;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target_sum) {
      return [left, right];
    } else if (sum > target_sum) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
};

const input = [1, 2, 3, 8];
const actual = pair_with_targetsum(input, 5);
const expected = [2, 3];
console.log(actual, expected);
