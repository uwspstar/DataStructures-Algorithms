/*
15. 3Sum : Medium

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

The solution set must "not" contain "duplicate triplets".

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

// 1: naive solution 3 nest loop (N^3)
// 2: a + b = 0 - c = -c

// slow, how to remove duplicate ?
const threeSumZero = function (arr) {
    if (arr.length < 3) return undefined;

    let set = new Set();
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let x = j + 1; x < arr.length; x++) {
                if (arr[i] + arr[j] + arr[x] === 0) {
                    set.add([arr[i], arr[j], arr[x]]);
                }
            }
        }
    }
    return set;
}

console.log(threeSumZero([-3, -1, 0, 1, 2, -1, -4]))