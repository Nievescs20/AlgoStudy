// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

// Examples:

// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb"

// Input: String="abbcb", k=1
// Output: 4
// Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb"

// Input: String="abccde", k=1
// Output: 3
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc"

function lengthOfLongestSubstring(str, k) {
  let windowStart = 0,
    longest = 0,
    longestRepeating = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    longestRepeating = Math.max(longestRepeating, charFrequency[rightChar]);

    if (windowEnd - windowStart + 1 - longestRepeating > k) {
      leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      windowStart += 1;
    }

    longest = Math.max(longest, windowEnd - windowStart + 1);
  }
  return longest;
}

console.log(length_of_longest_substring("aabccbb", 2));
console.log(length_of_longest_substring("abbcb", 1));
console.log(length_of_longest_substring("abccde", 1));