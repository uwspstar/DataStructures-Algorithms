//40. Combination Sum II
/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
 
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: [ [1,1,6], [1,2,5], [1,7], [2,6] ]
 
Input: candidates = [2,5,2,1,2], target = 5
Output: [ [1,2,2], [5] ]
*/
{
    /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
    //元素是有重复的: 难点在于：集合（数组candidates）有重复元素，但还不能有重复的组合。
    var combinationSum2 = function (nums, target) {
        let res = [];
        let path = [];
        //首先把给candidates排序，让其相同的元素都挨在一起。
        nums.sort((a, b) => a - b); //重复元素 nums[i - 1] === nums[i]

        const backTracking = (remain, idx) => {
            if (remain === 0) {
                res.push([...path]);
                return;
            } else if (remain < 0) {
                return;
            } else {
                for (let i = idx; i < nums.length; i++) {
                    if (i > idx && nums[i - 1] === nums[i]) continue;
                    path.push(nums[i]);
                    backTracking(remain - nums[i], i + 1); //not idx + 1
                    path.pop();
                }
            }
        }
        backTracking(target, 0)
        return res;
    };
    //Confusing Number II
    //How Many Numbers Are Smaller Than the Current Number
    //Minimum Changes To Make Alternating Binary String
}