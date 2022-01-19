//[Medium] 209. Minimum Size Subarray Sum
/*
给定一个含有 n 个"正整数" 的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。


输入：target = 7, nums = [2,3,1,2,4,3] 输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。

-> if it is not a positive arr ? not working
for example : 
nums = [-2, 3, 4] target = 7
in minSubArrayLen will return -1, when travel all arr once,
however, [3, 4] = 7
*/
{
    var minSubArrayLen = function (target, A) {
        let i = 0; // 初始化慢指针 i = 0;

        let ans = Infinity; //初始化 ans;

        let sum = 0;

        for (let j = 0; j < A.length; j++) {
            // 快指针 j in 可迭代集合;
            sum += A[j]; // 更新窗口内信息;

            while (sum >= target) {
                // while (窗口内符合题意)
                ans = Math.min(ans, j - i + 1); // 更新答案;

                sum -= A[i]; // 收缩窗口;

                i++; //  慢指针移动;
            }
        }

        //返回 ans
        return ans !== Infinity ? ans : 0; // very important
    };
}
