// 1095 · 最大的交换
// https://www.lintcode.com/problem/1095/?utm_source=sc-libao-zyq
// https://leetcode.com/problems/maximum-swap/
/*
给定一个非负整数, 你可以选择交换它的两个数位. 返回你能获得的最大的合法的数.
样例
样例1:

输入: 2736
输出: 7236
解释: 交换数字2和数字7.
样例2:

输入: 9973
输出: 9973
解释: 不用交换.
*/

export class Solution {
    /**
     * @param num: a non-negative integer
     * @return: the maximum valued number
     */
    maximumSwap(num) {

        const arr = new Array(10).fill(-1);
        num = Array.from(num.toString());

        const N = num.length;
        for (let i = 0; i < N; i++) {
            arr[num[i] - '0'] = i;
        }

        for (let i = 0; i < N; i++) {
            for (let d = 9; d > num[i]; d--) {
                if (arr[d] > i) {
                    let idx = arr[d];
                    let temp = num[idx];
                    num[idx] = num[i];
                    num[i] = temp;
                    return Number(num.join(''))
                }
            }
        }

        return Number(num.join(""));
    }
}
