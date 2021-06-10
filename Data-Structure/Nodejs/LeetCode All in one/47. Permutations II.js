//47. Permutations II
/*
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

Example 1:

Input: nums = [1,1,2] Output:[[1,1,2], [1,2,1], [2,1,1]]
Input: nums = [1,2,3] Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/
{
    /**
 * @param {number[]} nums
 * @return {number[][]}
 */
    var permuteUnique = function (nums) {
        let result = [];
        nums.sort((a, b) => a - b);

        let visited = new Array(nums.length).fill(false);
        //backtracking
        const backtrack = (arr) => {
            if (arr.length === nums.length) {
                result.push(arr);
            } else {
                for (let i = 0; i < nums.length; i++) {
                    // duplicate check
                    if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) continue;
                    visited[i] = true;
                    backtrack(arr.concat(nums[i]));
                    visited[i] = false;
                }
            }
        }

        backtrack([]);
        return result;
    };
}
//Palindrome Permutation II
//Number of Squareful Arrays