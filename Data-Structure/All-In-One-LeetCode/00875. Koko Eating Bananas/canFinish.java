/*
二分搜索的套路比较固定，如果遇到一个算法问题，能够确定 x, f(x), target 分别是什么，并写出单调函数 f 的代码。

这题珂珂吃香蕉的速度就是自变量 x，吃完所有香蕉所需的时间就是单调函数 f(x)，target 就是吃香蕉的时间限制 H。*/

class Solution {
    public int minEatingSpeed(int[] piles, int H) {
        int left = 1;
        int right = 1000000000 + 1;

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (f(piles, mid) <= H) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    // 定义：速度为 x 时，需要 f(x) 小时吃完所有香蕉
    // f(x) 随着 x 的增加单调递减
    int f(int[] piles, int x) {
        int hours = 0;
        for (int i = 0; i < piles.length; i++) {
            hours += piles[i] / x;
            if (piles[i] % x > 0) {
                hours++;
            }
        }
        return hours;
    }
}