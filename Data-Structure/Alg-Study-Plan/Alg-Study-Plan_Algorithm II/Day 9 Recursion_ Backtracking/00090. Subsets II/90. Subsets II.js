// 90. Subsets II
/*
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
*/
{
    // The solution set must not contain duplicate subsets. Return the solution in any order.

    const backTracking = (len, startIndex, res, path, nums, N) => {
        if (path.length === len) {
            res.push([...path]);
            return;
        } else {
            for (let i = startIndex; i < N; i++) {
                // DFS remove duplicate
                if (i > startIndex && nums[i - 1] === nums[i]) continue;
                path.push(nums[i]);
                backTracking(len, i + 1, res, path, nums, N);
                path.pop();
            }
        }
    }

    var subsetsWithDup = function (nums) {
        let res = [];
        let path = [];
        let N = nums.length;
        nums.sort((a, b) => a - b); // trim, to remove duplicate
        for (let len = 0; len <= N; len++) {
            backTracking(len, 0, res, path, nums, N);
        }
        return res;
    };

    // Find Array Given Subset Sums (H)
}