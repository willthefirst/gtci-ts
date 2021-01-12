const remove_duplicates = function (arr: number[]): number {
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i + 1] === arr[i]) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr.length;
};

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));
