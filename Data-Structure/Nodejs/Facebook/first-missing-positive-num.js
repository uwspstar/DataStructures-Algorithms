/*
You are given an array of integers. Return the smallest positive integer that is not present in the array. The array may contain duplicate entries.

For example, the input [3, 4, -1, 1] should return 2 because it is the smallest positive integer that doesn't exist in the array.

Your solution should run in "linear time" and use "constant space".
 
A naive solution is to first sort the array. However, the time complexity of this solution is O(n*log(n)) (sorting complexity for mergeSort or heapSort, or quickSort on average).
*/

// [5, 3, 4, -1, -2, -3, 1]

// extra space
const firstMissingInteger = function (arr) {
    if (arr.length === 0) return undefined;
    let set = new Set(arr);
    for (let i = 1; i < arr.length; i++) {
        if (!set.has(i)) return i;
    }
    return undefined;
}
console.log(firstMissingInteger([5, 3, 4, -1, -2, -3, 1]));