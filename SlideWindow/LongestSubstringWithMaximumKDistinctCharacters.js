// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Examples:

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa"

// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa"

// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi"

// Input: String="cbbebi", K=10
// Output: 6
// Explanation: The longest substring with no more than '10' distinct characters is "cbbebi"

const longestSubstringWithMaximumDistinctCharactersK = (str, k) => {
  let longest = 0;
  let windowStart = 0;
  let charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;

    while (Object.keys(charFrequency).length > k) {
      let charLeft = str[windowStart];
      charFrequency[charLeft] -= 1;
      if (charFrequency[charLeft] === 0) {
        delete charFrequency[charLeft];
      }
      windowStart++;
    }
    longest = Math.max(longest, windowEnd - windowStart + 1);
  }
  return longest;
};

console.log(longestSubstringWithMaximumDistinctCharactersK("araaci", 2));
console.log(longestSubstringWithMaximumDistinctCharactersK("araaci", 1));
console.log(longestSubstringWithMaximumDistinctCharactersK("cbbebi", 3));
console.log(longestSubstringWithMaximumDistinctCharactersK("cbbebi", 10));
