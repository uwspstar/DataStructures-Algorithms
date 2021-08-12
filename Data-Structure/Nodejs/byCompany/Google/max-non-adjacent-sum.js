/*
Maximum Non Adjacent Sum
Given a list of positive numbers, find the largest possible set such that no elements are adjacent numbers of each other.

def maxNonAdjacentSum(nums):
  
maxNonAdjacentSum([3, 4, 1, 1]) // 5 // max sum is 4 (index 1) + 1 (index 3)
maxNonAdjacentSum([2, 1, 2, 7, 3]) // 9 // max sum is 2 (index 0) + 7 (index 3)
2 -> 1, 2, 7, 3
1 -> 2, 7, 3
2 -> 3
*/
// Assume that len(nums) > 1

const maxNonAdjacentSum = nums => {
    if (nums.length < 2) return 0;
    let currMaxSum = 0;
    let prevMaxSum = 0;
    for (let i = 0; i < nums.length; i++) {

        let tmp = currMaxSum;
        console.log('i=', i, 'nums[i]', nums[i], 'currMaxSum', tmp, 'currMaxSum', currMaxSum, 'prevMaxSum', prevMaxSum)

        currMaxSum = Math.max(currMaxSum, prevMaxSum + nums[i]);
        prevMaxSum = tmp;

        //console.log(' nums[i]', nums[i], 'currMaxSum', tmp, 'currMaxSum', currMaxSum, 'prevMaxSum', prevMaxSum)
    }
    return currMaxSum;
}
console.log('maxNonAdjacentSum -1 :', maxNonAdjacentSum([3, 4, 1, 1])) // 5
console.log('maxNonAdjacentSum -2 :', maxNonAdjacentSum([2, 1, 2, 7, 3])) // 9