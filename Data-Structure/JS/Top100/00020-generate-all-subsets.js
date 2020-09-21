//[1, 2, 3] => [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
// 2^N total subsets
const generateAllSubsets = (nums) => {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [[], nums[0]];

    let result = [[]]
    for (let i = 0; i < nums.length; i++) {
        let temp = [];
        for (let j = 0; j < result.length; j++) {
            temp.push(result[i]);
        }
        result.push(temp);
    }
    return result;
}
// https://stackoverflow.com/questions/42773836/how-to-find-all-subsets-of-a-set-in-javascript#:~:text=You%20can%20easily%20generate%20the,%3D%200%3B%20j%20%3C%20array.

const PowerSet = (array) => {
    const result = [[]]; // Starting with empty set

    for (let value of array) { // For each value of the array
        const len = result.length; // Can't use result.length in loop since 
        // results length is increased in loop

        for (let i = 0; i < len; i++) {
            let temp = result[i].slice(0); // Make a clone of the value at index i 
            console.log('i', i, 'len', len, 'value', value, 'temp', temp, 'result', result);
            temp.push(value); // Add current value to clone
            result.push(temp); // Add clone back to results array 
        }
    }

    return result;
}

const powerSetRecursive = (arr, prefix = [], set = [[]]) => {
    if (arr.length === 0) return// Base case, end recursion

    for (let i = 0; i < arr.length; i++) {
        set.push(prefix.concat(arr[i]))// If a prefix comes through, concatenate value
        powerSetRecursive(arr.slice(i + 1), prefix.concat(arr[i]), set)
        // Call function recursively removing values at or before i and adding  
        // value at i to prefix
    }
    return set
}

console.log('PowerSet', PowerSet([1, 2, 3, 4]))
//console.log('powerSetRecursive', powerSetRecursive([1, 2, 3]))
//console.log('generateAllSubsets', generateAllSubsets([1, 2, 3]))
// [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]

/*
def generateAllSubsets(nums):
  result = [[]]

  for num in nums:
    temp = []
    for x in result:
      temp.append(x)
      temp.append([*x, num])

    result = temp

  return result
  */