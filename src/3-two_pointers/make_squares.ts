import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const make_squares = function (arr: number[]): number[] {
  const squares: number[] = new Array(arr.length);
  let nextIndex = squares.length - 1;
  let right = arr.length - 1;
  let left = 0;

  while (left <= right) {
    if (Math.abs(arr[left]) < Math.abs(arr[right])) {
      // Square of right item is larger than square of left item
      squares[nextIndex] = Math.pow(arr[right], 2);
      right--;
    } else {
      squares[nextIndex] = Math.pow(arr[left], 2);
      left++;
    }
    nextIndex--;
  }

  return squares;
};

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
