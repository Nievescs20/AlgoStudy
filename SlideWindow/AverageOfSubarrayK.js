const findAveragesOfSubArrayK = (arr, k) => {
  let results = [];
  //looping over the array from i value to where the the last i value has k-1 more values after (arr.length - k + 1)
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0.0;
    // second loop iterates over the k number of values in the substring starting at i and moving forward k-1 more values
    for (let j = i; j < i + k; j++) {
      //add the array element at position j
      sum += arr[j];
    }
    //divide the sum by k and then push the final value to the results array
    results.push(sum / k);
  }
  //return the results
  return results;
};

console.log(
  "O(N*k): ",
  findAveragesOfSubArrayK([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)
);

const findAveragesOfSubArrayKOptimized = (arr, k) => {
  let results = [];
  let windowSum = 0.0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      results.push(windowSum / k);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return results;
};

console.log(
  "O(N): ",
  findAveragesOfSubArrayKOptimized([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)
);
