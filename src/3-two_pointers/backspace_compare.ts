const cursorAfterBackspaces = (index: number, str: string): number => {
  let backspaceCount = 0;

  while (str[index] === '#') {
    backspaceCount++;
    index--;
  }

  return index - backspaceCount;
};

// console.log(cursorAfterBackspaces(5, 'ABCDEF') === 5);
// console.log(cursorAfterBackspaces(2, 'AB#DEF') === 0);
// console.log(cursorAfterBackspaces(5, 'ABCDE#') === 3);
// console.log(cursorAfterBackspaces(5, 'ABC###') === -1);
// console.log(cursorAfterBackspaces(3, 'xzz#') === 1);

const backspace_compare = function (str1: string, str2: string): boolean {
  // Start cursors off end of array
  let cursor1 = str1.length;
  let cursor2 = str2.length;

  while (cursor1 >= 0 && cursor2 >= 0) {
    cursor1 = cursorAfterBackspaces(cursor1 - 1, str1);
    cursor2 = cursorAfterBackspaces(cursor2 - 1, str2);

    if (str1[cursor1] !== str2[cursor2]) {
      return false;
    }
  }

  return true;
};

console.log(backspace_compare('xy#z', 'xzz#') === true);
