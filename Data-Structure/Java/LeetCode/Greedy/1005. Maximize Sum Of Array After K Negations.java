//1005. Maximize Sum Of Array After K Negations
/*
Given an array nums of integers, we must modify the array in the following way: we choose an i and replace nums[i] with -nums[i], and we repeat this process k times in total.  (We may choose the same index i multiple times.)

Return the largest possible sum of the array after modifying it in this way.

Input: nums = [4,2,3], k = 1 Output: 5
Explanation: Choose indices (1,) and nums becomes [4,-2,3].

Input: nums = [3,-1,0,2], k = 3 Output: 6
Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].

Input: nums = [2,-3,-1,5,-4], k = 2 Output: 13
Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
*/
//让绝对值大的负数变为正数，当前数值达到最大，整体最优
//如果将负数都转变为正数了，K依然大于0，此时的问题是一个有序正整数序列
//注意要按照绝对值的大小
/*
本题的解题步骤为：
第一步：将数组按照绝对值大小从大到小排序，注意要按照绝对值的大小
第二步：从前向后遍历，遇到负数将其变为正数，同时K--
第三步：如果K还大于0，那么反复转变数值最小的元素，将K用完
第四步：求和
*/
{
    var largestSumAfterKNegations = function (nums, k) {
        let res = 0;
        nums.sort((a, b) => Math.abs(b) - Math.abs(a));

        for (let i = 0; i < nums.length && k > 0; i++) {
            if (nums[i] < 0) {
                nums[i] = (-1) * nums[i];
                k--;
            }
        }
        let p = nums.length - 1;
        if (k > 0 && k % 2 === 1) {
            nums[p] = (-1) * nums[p];
            //k = 0;
        }

        for (let num of nums) {
            res += num;
        }

        return res;
    }

    console.log(largestSumAfterKNegations([4, 2, 3], 1)); //5
    console.log(largestSumAfterKNegations([3, -1, 0, 2], 3)); //6
    console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)); //13
}
{
    var largestSumAfterKNegations = function (nums, k) {
        nums.sort((a, b) => {
            return Math.abs(b) - Math.abs(a)
        })
        console.log('nums=', nums);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 0 && k > 0) {
                nums[i] *= -1
                k--
            }
        }

        if (k > 0 && k % 2 === 1) {
            nums[nums.length - 1] *= -1
        }
        k = 0

        return nums.reduce((a, b) => {
            return a + b
        })
    };

    //console.log(largestSumAfterKNegations([4, 2, 3], 1)); //5
    //console.log(largestSumAfterKNegations([3, -1, 0, 2], 3)); //6
    console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)); //7
}