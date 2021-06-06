//491. Increasing Subsequences
/*
Given an integer array nums, return all the different possible increasing subsequences of the given array with at least two elements. You may return the answer in any order.

The given array may contain duplicates, and two equal integers should also be considered a special case of increasing sequence.

Input: nums = [4,6,7,7] Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
Input: nums = [4,4,3,2,1] Output: [[4,4]]
*/
{
    /**
 * @param {number[]} nums
 * @return {number[][]}
 */
    // return all the different possible increasing subsequences of the given array with at least two elements.
    var findSubsequences = function (nums) {
        let res = [];
        let path = [];
        //nums.sort((a,b) => a - b);
        const backTracking = (len, startIndex) => {
            if (path.length > len) {
                res.push([...path]);
                return;
            } else {
                const set = new Set();
                for (let i = startIndex; i < nums.length; i++) {
                    if (i > startIndex && nums[i - 1] === nums[i]) continue;
                    if (nums[i] < path[path.length - 1]) continue;
                    if (set.has(nums[i])) continue
                    set.add(nums[i]);

                    path.push(nums[i]);
                    backTracking(len, i + 1);
                    path.pop();
                }
            }
        }
        for (let len = 1; len <= nums.length; len++) {
            backTracking(len, 0)
        }
        return res;
    };
    //Maximum Length of Pair Chain
}
{
    const findSubsequences = function (nums) {
        return helper([], [], nums, 0);
    };

    const helper = (res, list, nums, index) => {
        if (list.length > 1) res.push([...list])
        const unique = new Set();

        for (let i = index; i < nums.length; i++) {
            if (nums[i] < nums[index - 1]) continue;

            if (unique.has(nums[i])) continue; //remove duplicate
            unique.add(nums[i]);

            list.push(nums[i]);
            helper(res, list, nums, i + 1);
            list.pop();
        }

        return res;
    }
}