/*
基本思路
一个数如果是 2 的指数，那么它的二进制表示一定只含有一个 1。

位运算 n&(n-1) 在算法中挺常见的，作用是消除数字 n 的二进制表示中的最后一个 1，用这个技巧可以判断 2 的指数。

详细题解：东哥教你几招常用的位运算技巧

标签：数学，位运算

解法代码

How to get / isolate the rightmost 1-bit : x & (-x).

How to turn off (= set to 0) the rightmost 1-bit : x & (x - 1).

*/
class Solution {
    public boolean isPowerOfTwo(int n) {
        if (n <= 0)
            return false;
        return (n & (n - 1)) == 0;
    }
}
/*
 * 类似题目：
 * 
 * 191. 位 1 的个数（简单）
 */