// 413. Arithmetic Slices
/*
An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [1,2,3,4]
Output: 3
Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
Example 2:

Input: nums = [1]
Output: 0


龅牙叔
https://leetcode-cn.com/problems/arithmetic-slices/solution/deng-chai-shu-lie-hua-fen-by-leetcode-so-g7os/
举例

[1, 2, 3, 4, 5, 19, 20, 30, 40]。答案为7。
首先容易观察到：

长度为3的等差数列，可以贡献1种答案。例如 [1,2,3] 。

长度为4的等差数列，可以贡献3种答案。例如[1,2,3,4]，有长度为3的子数列[1,2,3]和[2,3,4]两种。以及长度为4的数列[1,2,3,4]一种。一共是1+2=3种。

长度为5的等差数列，可以贡献6种答案。例如[1,2,3,4,5]，有长度为3的子数列[1,2,3]和[2,3,4]和[3,4,5]三种，以及长度为4的子数列[1,2,3,4]和[2,3,4,5]两种，以及长度为5的数列[1,2,3,4,5]一种。一共是1+2+3=6种。

假设我们已经找到了一个长度为3的等差数列。它可以给答案带来一种贡献。

如果遍历到下一个数时，发现这个数可以拼接到前面长度为3的等差数列的末尾，形成一个长度为4的等差数列，那么把长度为3的等差数列的答案贡献数加一，就是由于这次拼接带来的新的贡献数。当前长度为4的等差数列，这次拼接新的贡献量为1+1=2。

同理，下一次遍历又发现一个数可以在已发现的长度为4的等差数列的基础上，拼接成长度为5的等差数列，那么新的贡献量就是2+1=3.

如果下一个数无法与前面的数列行成新的等差数列，那么贡献量清零。

回到例子

[1, 2, 3, 4, 5, 19, 20, 30, 40]，
我们从前往后遍历：

行成[1,2,3]时，当前新贡献量为1，答案加1。
行成[1,2,3,4]时，当前新贡献量为2，答案再加2。
行成[1,2,3,4,5]时，当前新贡献量为3，答案再加3。
遇到了19，贡献量清零。
最后遇到[20, 30, 40]，当前新贡献量为1，答案再加1。
结束，返回答案：7。

*/
{
    var numberOfArithmeticSlices = function (nums) {
        const N = nums.length;
        if (N === 1) {
            return 0;
        }
        // d = nums[i - 1] - nums[i]; 等差
        let d = nums[0] - nums[1], cnt = 0;
        let ans = 0;
        // 因为等差数列的长度至少为 3，所以可以从 i = 2 开始枚举
        for (let i = 2; i < N; i++) {
            if (nums[i - 1] - nums[i] === d) {
                ++cnt;
            } else {
                // reset
                d = nums[i - 1] - nums[i];
                cnt = 0;
            }
            ans += cnt;
            console.log('[', nums[i - 1], nums[i], ']', 'd=', d, 'ans=', ans, 'cnt=', cnt);
        }
        return ans;
    };
    // Arithmetic Slices II - Subsequence (H)
    // Arithmetic Subarrays (M)

    // https://leetcode-cn.com/problems/arithmetic-slices/solution/deng-chai-shu-lie-hua-fen-by-leetcode-so-g7os/


    console.log('numberOfArithmeticSlices =', numberOfArithmeticSlices([1, 2, 3, 4, 5, 19, 20, 30, 40]))
    
    /*
    [ 2 3 ] d= -1 ans= 1 cnt= 1
    [ 3 4 ] d= -1 ans= 3 cnt= 2
    [ 4 5 ] d= -1 ans= 6 cnt= 3
    [ 5 19 ] d= -14 ans= 6 cnt= 0
    [ 19 20 ] d= -1 ans= 6 cnt= 0
    [ 20 30 ] d= -10 ans= 6 cnt= 0
    [ 30 40 ] d= -10 ans= 7 cnt= 1
    numberOfArithmeticSlices = 7
    */
}
