// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

// Examples:

// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6

// Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
// Output: 9
// Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9

const longestSubarrayWithOnesAfterReplacement = function (arr, k) {
  let longest = 0;
  let left = 0;
  let numFrequency = {};

  for (let right = 0; right < arr.length; right++) {
    let rightNum = arr[right];
    if (!(rightNum in numFrequency)) {
      numFrequency[rightNum] = 0;
    }
    numFrequency[rightNum]++;

    if (right - left + 1 - numFrequency[1] > k) {
      let leftNum = arr[left];
      numFrequency[leftNum]--;
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

console.log(
  longestSubarrayWithOnesAfterReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)
);
console.log(
  longestSubarrayWithOnesAfterReplacement(
    [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
    3
  )
);
