const FindStringAnagrams = function (str, pattern) {
  let resultIndexes = [];
  let matched = 0;
  let windowStart = 0;
  let patternFrequency = {};

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if (!(char in patternFrequency)) {
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
      resultIndexes.push(windowStart);
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

  return resultIndexes;
};

console.log(FindStringAnagrams("ppqp", "pq"));
console.log(FindStringAnagrams("abbcabc", "abc"));
