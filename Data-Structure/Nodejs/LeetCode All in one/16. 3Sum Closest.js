//16. 3Sum Closest

/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Input: nums = [-1,2,1,-4], target = 1 Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

3Sum is a well-known problem with many variations and its own Wikipedia page.

For an interview, we recommend focusing on the Two Pointers approach above. It's easier to get it right and adapt for other variations of 3Sum. Interviewers love asking follow-up problems like 3Sum Smaller!

If an interviewer asks you whether you can achieve O(1) memory complexity, you can use the selection sort instead of a built-in sort in the Two Pointers approach. It will make it a bit slower, though the overall time complexity will be still O(n^2)
*/
{  //O(N^2)
    var threeSumClosest = function (nums, target) {
        //You may assume that each input would have exactly one solution.

        nums.sort((a, b) => a - b);      //sort nums

        let closeVal = Infinity;
        let res = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                let tmp = Math.abs(sum - target);
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
// 3Sum Smaller
{
    const threeSumClosest = (nums, target) => {
        nums.sort((a, b) => a - b);

        let res = -Infinity;
        let closeValue = Infinity;

        for (let i = 0; i < nums.length; i++) {
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];

                let tmp = Math.abs(target - sum);
                if (tmp < closeValue) {
                    closeValue = tmp;
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
    }
    //Candy Crush
    //Subarrays with K Different Integers
    //Verbal Arithmetic Puzzle
}