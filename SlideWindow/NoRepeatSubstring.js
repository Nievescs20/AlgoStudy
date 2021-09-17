//Given a string, find the length of the longest substring, which has no repeating characters.

// Examples:

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc"

// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring without any repeating characters is "ab".

// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings without any repeating characters are "abc" & "cde"

function NoRepeatingSubstring(str) {
  let windowStart = 0,
    longest = 0,
    charIndex = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in charIndex) {
      windowStart = Math.max(windowStart, charIndex[rightChar] + 1);
    }

    charIndex[rightChar] = windowEnd;

    longest = Math.max(longest, windowEnd - windowStart + 1);
  }
  return longest;
}

console.log(NoRepeatingSubstring("aabccbb"));
console.log(NoRepeatingSubstring("abbbb"));
console.log(NoRepeatingSubstring("abccde"));
