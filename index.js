function hasTargetSum(array, target) {
  //Algorithm
  // Algorithm:
  // 1. Create an empty object to store visited numbers.
  // 2. Iterate through the array.
  // 3. For each number, calculate the difference between the target and the number.
  // 4. Check if the difference exists in the visited numbers object.
  // 5. If the difference exists, return true, as a pair with the given target sum was found.
  // 6. If the difference doesn't exist, add the current number to the visited numbers object.
  // 7. If no pair is found after iterating through the array, return false.

  const visitedNumbers = {};

  for (const num of array) {
    const difference = target - num;

    if (visitedNumbers[difference]) {
      return true;
    }

    visitedNumbers[num] = true;
  }
    return false;
}

//Big 0 Time Complexity: 0(n) 

// Pseudocode:
// - Create an empty object visitedNumbers
// - For each number in the array array
//   - Calculate the difference as target - num
//   - If visitedNumbers contains the difference, return true
//   - Otherwise, mark the current num as visited by adding it to visitedNumbers
// - If no pair is found, return false

// Explanation:
// The function uses a hash table (visitedNumbers) to keep track of visited numbers.
// It iterates through the array once, for each element, it calculates the difference required to reach the target sum.
// If the difference exists in the visited numbers, a pair is found, and the function returns true.
// If no such pair is found after the iteration, it returns false.
if (require.main === module) {

  console.log("expecting: false");
  console.log("=>", hasTargetSum([3, 8, 12, 4], 9));

  console.log("");
  
  console.log("expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
}

module.exports = hasTargetSum;
