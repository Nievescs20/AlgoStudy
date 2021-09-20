// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters, it will have n!n! permutations

// Examples:

// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern

// Input: String="odicf", Pattern="dc"
// Output: false
// Explanation: No permutation of the pattern is present in the given string as a substring

// Input: String="bcdxabcdy", Pattern="bcdyabcdx"
// Output: true
// Explanation: Both the string and the pattern are a permutation of each other

// Input: String="aaacb", Pattern="abc"
// Output: true
// Explanation: The string contains "acb" which is a permutation of the given pattern

const permutationInAString = function (str, pattern) {
  let windowStart = 0;
  let matched = 0;
  let patternFrequency = {};

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if (!patternFrequency[char]) {
      patternFrequency[char] = 0;
    }
    patternFrequency[char]++;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (rightChar in patternFrequency) {
      patternFrequency[rightChar]--;
      if (patternFrequency[rightChar] === 0) {
        matched++;
      }
    }

    if (matched === Object.keys(patternFrequency).length) {
      return true;
    }

    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      windowStart++;

      if (leftChar in patternFrequency) {
        if (patternFrequency[leftChar] === 0) {
          matched--;
        }
        patternFrequency[leftChar]++;
      }
    }
  }
  return false;
};

console.log(`Permutation exist: ${permutationInAString("oidbcaf", "abc")}`);
console.log(`Permutation exist: ${permutationInAString("odicf", "dc")}`);
console.log(
  `Permutation exist: ${permutationInAString("bcdxabcdy", "bcdyabcdx")}`
);
console.log(`Permutation exist: ${permutationInAString("aaacb", "abc")}`);
