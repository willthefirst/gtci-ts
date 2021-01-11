// https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ

const fruits_into_baskets = function (fruits: string[]): number {
  let maxLength = 0;
  let start = 0;
  let distinctChars = new Set();

  for (let end = 0; end < fruits.length; end++) {
    if (!distinctChars.has(fruits[end])) {
      distinctChars.add(fruits[end]);

      while (distinctChars.size > 2) {
        if (!fruits.slice(start + 1, end).includes(fruits[start])) {
          distinctChars.delete(fruits[start]);
        }
        start++;
      }
    }

    maxLength = Math.max(end - start + 1, maxLength);
  }

  return maxLength;
};

console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']));
