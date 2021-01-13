const remove_duplicates = function (arr: number[]): number {
  let nextUnique = 1;
  let i = 1;

  while (i < arr.length) {
    if (arr[nextUnique - 1] !== arr[i]) {
      arr[nextUnique] = arr[i];
      nextUnique++;
    }
    i++;
  }
  return nextUnique;

  /* 
  [2, 3, 6, 9, 6, 9, 9]
            u           i 
  */
};

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));
