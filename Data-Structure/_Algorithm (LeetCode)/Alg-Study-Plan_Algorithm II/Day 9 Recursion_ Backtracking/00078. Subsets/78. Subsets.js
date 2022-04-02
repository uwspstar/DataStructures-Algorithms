// 78. Subsets
/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/
{
    const backtrack = (len, start, res, path, nums, N) => {
        if (path.length === len) {
            res.push([...path]);
            return;
        } else {
            for (let i = start; i < N; i++) {
                path.push(nums[i]);
                backtrack(len, i + 1, res, path, nums, N)
                path.pop();
            }
        }
    };

    var subsets = function (nums) {
        const res = [];
        const path = [];
        let N = nums.length;
        for (let i = 0; i <= N; i++) {
            backtrack(i, 0, res, path, nums, N);
        }
        return res;
    };
}