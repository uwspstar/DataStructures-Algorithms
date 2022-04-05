// 16. 3Sum Closest
/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.
You may assume that each input would have exactly one solution.
*/
{
    var threeSumClosest = function (nums, target) {
        let N = nums.length;
        if (N < 3) return -1;
        nums.sort((a, b) => a - b);
        let res = Infinity;
        let clsVal = Infinity;
        for (let i = 0; i < N - 2; i++) {
            let left = i + 1, right = N - 1;
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right]
                let tmp = Math.abs(sum - target);

                if (tmp < clsVal) {
                    clsVal = tmp;
                    res = sum;
                }

                if (sum === target) return res;
                if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return res;
    };
    // The Earliest Moment When Everyone Become Friends (M)
    // Minimum Number of Moves to Seat Everyone (E)
    // Maximum Path Quality of a Graph (H)
}