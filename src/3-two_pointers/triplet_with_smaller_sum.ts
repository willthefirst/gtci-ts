// Counts pairs in array below the target number
const findPairs = (arr: number[], target: number, first: number): number => {
  let count = 0;
  let left = first + 1;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] < target) {
      // Since the array is sorted, we can infer that all lesser values of right will also produce sums that are less than target.
      count += right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
};

function triplet_with_smaller_sum(arr: number[], target: number): number {
  let count = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    count += findPairs(arr, target - arr[i], i);
  }

  return count;
}

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
