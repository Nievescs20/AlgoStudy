// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type

// Write a function to return the maximum number of fruits in both baskets

// Examples:

// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

const fruitsIntoBaskets = (fruit) => {
  let basketSize = 0;
  let windowStart = 0;
  let fruitFrequency = {};

  for (let windowEnd = 0; windowEnd < fruit.length; windowEnd++) {
    let fruitRight = fruit[windowEnd];
    if (!(fruitRight in fruitFrequency)) {
      fruitFrequency[fruitRight] = 0;
    }
    fruitFrequency[fruitRight] += 1;

    while (Object.keys(fruitFrequency).length > 2) {
      let fruitLeft = fruit[windowStart];
      fruitFrequency[fruitLeft] -= 1;
      if (fruitFrequency[fruitLeft] === 0) {
        delete fruitFrequency[fruitLeft];
      }
      windowStart++;
    }
    basketSize = Math.max(basketSize, windowEnd - windowStart + 1);
  }
  return basketSize;
};

console.log(fruitsIntoBaskets(["A", "B", "C", "A", "C"]));
console.log(fruitsIntoBaskets(["A", "B", "C", "B", "B", "C"]));
