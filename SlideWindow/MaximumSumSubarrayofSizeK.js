//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’

// Examples:

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3]

// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4]

const maximumSumSubarrayOfSizeK = (arr, k) => {
  let largest = 0;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    if (sum > largest) {
      largest = sum;
    }
  }
  return largest;
};

console.log("O(N*k): ", maximumSumSubarrayOfSizeK([2, 3, 4, 1, 5], 2));
console.log("O(N*k): ", maximumSumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3));
console.log("space complexity is O(N)");

const maximumSumSubarrayOfSizeKOptimized = (arr, k) => {
  let largest = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      largest = Math.max(largest, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return largest;
};

console.log("O(N): ", maximumSumSubarrayOfSizeKOptimized([2, 3, 4, 1, 5], 2));
console.log(
  "O(N): ",
  maximumSumSubarrayOfSizeKOptimized([2, 1, 5, 1, 3, 2], 3)
);
console.log("space complexity is O(N)");
