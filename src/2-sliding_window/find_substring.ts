// const find_substring = function (str: string, pattern: string): string {
//   let minString = '';
//   const charsLeftToMatch: Record<string, number> = {};
//   let numCharsMatched = 0;
//   let numOvermatched = 0;
//   let windowStart = 0;

//   // Build pattern hashmap that will keep track of pattern left to match
//   for (let i = 0; i < pattern.length; i++) {
//     const char = pattern[i];
//     if (char in charsLeftToMatch) {
//       charsLeftToMatch[char]++;
//     } else {
//       charsLeftToMatch[char] = 1;
//     }
//   }

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const charRight = str[windowEnd];

//     if (charRight in charsLeftToMatch) {
//       if (charsLeftToMatch[charRight] > 0) {
//         numCharsMatched++;
//       } else {
//         // Keep track of nunber of extra matches we've made so that we can eventually try to shrink the window
//         numOvermatched++;
//       }

//       charsLeftToMatch[charRight]--;

//       if (
//         numCharsMatched === Object.keys(charsLeftToMatch).length &&
//         (windowEnd - windowStart + 1 <= minString.length ||
//           minString.length === 0)
//       ) {
//         minString = str.slice(windowStart, windowEnd + 1);
//         while (numOvermatched > 0 || !(str[windowStart] in charsLeftToMatch)) {
//           const charLeft = str[windowStart];
//           if (charLeft in charsLeftToMatch) {
//             if (charsLeftToMatch[charLeft] === 0) {
//               numCharsMatched--;
//             } else if (charsLeftToMatch[charLeft] < 0) {
//               numOvermatched--;
//             }
//             charsLeftToMatch[charLeft]++;
//           }
//           windowStart++;
//         }
//       }
//     }
//   }

//   return minString;

//   /*

//   string: "aabdec"
//            >
//   pattern: "abc"
//   expected: "bca"

//   ---
//   string: "abdbca"
//              < >
//   numOvermatched: 0
//   numCharsMatched: 2;
//   patternMap: {
//     a: 1,
//     b: 0,
//     c: 0
//   }

//   minString: "bca";

//   ---
//   minString = "";

//   */
// };

// console.log(find_substring('aabdec', 'abc') === 'abdec');
// console.log(find_substring('abdbca', 'abc') === 'bca');
// console.log(find_substring('adcad', 'abc') === '');
