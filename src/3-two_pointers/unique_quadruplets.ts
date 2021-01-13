const findPairs = (
  arr: number[],
  targetSum: number,
  lowestIndex: number
): number[][] => {
  const pairs: number[][] = [];
  let j = arr.length - 1,
    i = lowestIndex;

  while (i < j) {
    const sum = arr[i] + arr[j];

    if (sum === targetSum) {
      pairs.push([arr[i], arr[j]]);
      i++;
      j--;

      // Skip duplicates
      while (arr[i] === arr[i - 1]) {
        i++;
      }
      while (arr[j] === arr[j + 1]) {
        j--;
      }
    } else if (sum > targetSum) {
      j--;
      while (arr[j] === arr[j + 1]) {
        j--;
      }
    } else {
      // Sum is too small
      i++;
      // Skip duplicates
      while (arr[i] === arr[i - 1]) {
        i++;
      }
    }
  }

  return pairs;
};

const search_quadruplets = function (
  arr: number[],
  target: number
): number[][] {
  const quadruplets: number[][] = [];

  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length - 3; i++) {
    const pairs = findPairs(arr, target - (arr[i] + arr[i - 1]), i);
    pairs.forEach((pair) => {
      quadruplets.push([arr[i - 1], arr[i]].concat(pair));
    });
  }

  return quadruplets;
};

console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
/* 
  Input: [4, 1, 2, -1, 1, -3], 
  target=1
  Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
  ----

  targetSum = 5;
                i        j
  arr: [-3, -1, 1, 1, 2, 4]
                L     
  ---

*/

export {};
