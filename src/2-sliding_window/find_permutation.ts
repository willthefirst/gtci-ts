// https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D

const buildMapFromPattern = (pattern: string): Map<string, number> => {
  // Returns a pattern map from a string.
  const patternMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (patternMap.has(char)) {
      patternMap.set(char, patternMap.get(char) + 1);
    } else {
      patternMap.set(char, 1);
    }
  }

  return patternMap;
};

const find_permutation = function (str: string, pattern: string): boolean {
  let charsLeftToMatch: Map<string, number> = buildMapFromPattern(pattern);

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const numLeft: number | undefined = charsLeftToMatch.get(char);

    if (numLeft !== undefined) {
      // Character is part of the pattern
      if (numLeft <= 1) {
        charsLeftToMatch.delete(char);
      } else {
        charsLeftToMatch.set(char, numLeft - 1);
      }

      if (charsLeftToMatch.size === 0) {
        return true;
      }
    } else {
      // Character is not part of pattern, breaking up whatever contiguous pattern we've been matching so far. Reset charsLeftToMatch.
      charsLeftToMatch = buildMapFromPattern(pattern);
    }
  }
  return false;
};

console.log(find_permutation('oidbcaf', 'abc'));
