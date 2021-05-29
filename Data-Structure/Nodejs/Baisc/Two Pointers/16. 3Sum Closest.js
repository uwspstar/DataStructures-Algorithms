//16. 3Sum Closest

/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Input: nums = [-1,2,1,-4], target = 1 Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/
{
    var threeSumClosest = function (nums, target) {
        //You may assume that each input would have exactly one solution.
        //sort nums
        nums.sort((a, b) => a - b);
        let closeVal = Infinity;
        let res = -Infinity;
        //console.log(nums)
        for (let i = 0; i < nums.length; i++) {
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                let tmp = Math.abs(sum - target);
                //console.log('nums=',nums, 'sum=', sum, 'tmp=', tmp)
                if (tmp <= closeVal) {
                    closeVal = tmp;
                    res = sum;
                }
                if (sum === target) return sum;
                if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return res;
    };
}