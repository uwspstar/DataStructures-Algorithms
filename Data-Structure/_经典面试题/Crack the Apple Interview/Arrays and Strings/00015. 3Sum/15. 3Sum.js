// 15. 3Sum
// https://leetcode.com/problems/3sum/
{
    // nums[i] + nums[j] + nums[k] == 0.
    // Notice that the solution set must not contain duplicate triplets.

    var threeSum = function (nums) {
        if (nums.length < 3) return [];

        let res = [];

        // step 1 : sort
        nums.sort((a, b) => a - b);

        // step 2 : two pointers
        let N = nums.length;

        for (let i = 0; i < N - 2; i++) {
            if (i > 0 && nums[i - 1] === nums[i]) continue; // very important !!!

            let left = i + 1;
            let right = N - 1;

            while (left < right) { 
 
                let sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) { left++; }
                    while (left < right && nums[right] === nums[right + 1]) { right--; }

                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return res;
    };
    // Card Flipping Game (M)
    // Divide Array Into Increasing Sequences (H)
    // Number of Orders in the Backlog (M)
}