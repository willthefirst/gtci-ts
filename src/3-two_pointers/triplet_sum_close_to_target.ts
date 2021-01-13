const triplet_sum_close_to_target = function (
  arr: number[],
  target_sum: number
): number {
  let closestSum: number = Infinity;
  let right = arr.length - 1;
  let left = arr.length - 2;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < left; i++) {
    const sum = arr[i] + arr[right] + arr[left];
    const diff = target_sum - sum;

    if (diff === 0) {
      return diff;
    }

    if (Math.abs(diff) < Math.abs(target_sum - closestSum)) {
      closestSum = sum;
    }

    if (diff < 0) {
      right - left > 1 ? right-- : left--;
    }
  }
  return closestSum;
};

console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
