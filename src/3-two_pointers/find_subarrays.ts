const createSubarrays = (arr: number[], i: number, j: number): number[][] => {
  const result: number[][] = [];
  for (let count = 0; count <= j - i; count++) {
    result.push(arr.slice(j - count, j + 1));
  }
  return result;
};

const find_subarrays = function (arr: number[], target: number): number[][] {
  const result: number[][] = [];
  let windowLeft: number = 0;
  let windowProduct = 1;

  for (let windowRight = 0; windowRight < arr.length; windowRight++) {
    windowProduct *= arr[windowRight];
    while (windowProduct >= target) {
      windowProduct /= arr[windowLeft];
      windowLeft++;
    }
    result.push(...createSubarrays(arr, windowLeft, windowRight));
  }

  return result;
};

console.log(find_subarrays([2, 5, 3, 10], 30));
