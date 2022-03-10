/*
基本思路
n & (n-1) 这个操作是算法中常见的，作用是消除数字 n 的二进制表示中的最后一个 1：

不断消除数字 n 中的 1，直到 n 变为 0。

详细题解：东哥教你几招常用的位运算技巧

标签：数学，位运算

解法代码
*/
public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int res = 0;
        while (n != 0) {
            n = n & (n - 1);
            res++;
        }
        return res;
    }
}
/*
 * 类似题目：
 * 
 * 231.2 的幂（简单）
 */