const dutch_flag_sort = function (arr: number[]) {
  let low = 0;
  let high = arr.length - 1;
  let i = 0;

  while (i <= high) {
    if (arr[i] === 0) {
      [arr[low], arr[i]] = [arr[i], arr[low]]; //swap this and thing at low
      low++;
      i++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      // arr[i] === 2
      [arr[high], arr[i]] = [arr[i], arr[high]];
      high--;
    }
  }
};

const arr1 = [2, 2, 0, 1, 2, 0];
dutch_flag_sort(arr1);
console.log(arr1);
