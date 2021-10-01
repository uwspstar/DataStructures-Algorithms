//698. Partition to K Equal Sum Subsets
/*
Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

Input: nums = [1,2,3,4], k = 3
Output: false
*/
{
    var canPartitionKSubsets = function (nums, k) {
        let sum = 0;
        for (let n of nums) {
            sum += n;
        }

        if (sum % k !== 0) return false;

        let average = sum / k;
        nums.sort((a, b) => b - a); // avoid the [1,1,1,1,2,2,2,2] k =4, issue, you do not want to 111 first, you want to 2 + 1, always put the big number first

        let visited = new Set();
        let path = [];
        const backTracking = (average, idx) => {
            if (average === 0) {
                for (p of path) {
                    if (visited.has(p)) return;
                }
                for (let p of path) {
                    visited.add(p);
                }
                return;
            }

            for (let i = idx; i < nums.length; i++) {
                path.push(i);
                backTracking(average - nums[i], i + 1);
                path.pop();
            }
        }

        backTracking(average, 0);

        return visited.size === nums.length;

    };

    console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
    console.log(canPartitionKSubsets([2, 2, 2, 2, 3, 4, 5], 4));
    console.log(canPartitionKSubsets([1, 1, 1, 1, 2, 2, 2, 2], 4));
}