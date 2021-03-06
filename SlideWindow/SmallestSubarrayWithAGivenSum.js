//Given an array of positive numbers and a positive number āS,ā find the length of the smallest contiguous subarray whose sum is greater than or equal to āSā. Return 0 if no such subarray exists

// Examples:

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2]

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8]

// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1]
// or [1, 1, 6]

const smallestSubarrayWithAGivenSum = (arr, s) => {
  let shortest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      count++;
      if (sum >= s && count < shortest) {
        shortest = count;
      }
    }
  }
  if (shortest === Infinity) {
    return 0;
  } else {
    return shortest;
  }
};

console.log(smallestSubarrayWithAGivenSum([2, 1, 5, 2, 3, 2], 7));
console.log(smallestSubarrayWithAGivenSum([2, 1, 5, 2, 8], 7));
console.log(smallestSubarrayWithAGivenSum([3, 4, 1, 1, 6], 8));

const smallestSubarrayWithAGivenSumOptimized = (arr, s) => {
  let smallest = Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= s) {
      smallest = Math.min(smallest, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  if (smallest === Infinity) {
    return 0;
  } else {
    return smallest;
  }
};

console.log(smallestSubarrayWithAGivenSumOptimized([2, 1, 5, 2, 3, 2], 7));
console.log(smallestSubarrayWithAGivenSumOptimized([2, 1, 5, 2, 8], 7));
console.log(smallestSubarrayWithAGivenSumOptimized([3, 4, 1, 1, 6], 8));
