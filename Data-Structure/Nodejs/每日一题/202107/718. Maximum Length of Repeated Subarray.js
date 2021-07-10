//718. Maximum Length of Repeated Subarray
/*
Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

Example 1:
Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].

Example 2:
Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5

根据dp[i][j]的定义，dp[i][j]的状态只能由dp[i - 1][j - 1]推导出来。

即当A[i - 1] 和B[j - 1]相等的时候，dp[i][j] = dp[i - 1][j - 1] + 1;

根据递推公式可以看出，遍历i 和 j 要从1开始！

作者：carlsun-2
链接：https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/solution/dai-ma-sui-xiang-lu-718-zui-chang-zhong-rowbh/
=
*/
{
    //DP
}
{//O(N^3) : Time Limit Exceeded
    var findLength = function (nums1, nums2) {
        let res = 0;
        for (let i = 0; i < nums1.length; i++) {

            for (let j = 0; j < nums2.length; j++) {
                let k = 0;
                while (nums1[i + k] === nums2[j + k]) {
                    k++;
                }
                res = Math.max(res, k);
            }
        }
        return res;
    };
}