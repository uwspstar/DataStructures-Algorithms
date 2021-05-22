//367. Valid Perfect Square
/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

Example 1: Input: num = 16 Output: true
Example 2: Input: num = 14 Output: false
*/
/*
Square root related problems usually could be solved in logarithmic time. 
There are three standard logarithmic time approaches
Recursion. The slowest one.
Binary Search. The simplest one.
Newton's Method. The fastest one, and therefore widely used in dynamical simulations.
*/
//Newton's Method : x = (x + num / x) / 2;
/*
牛顿迭代法：公式是如何推导的呢？让我们做一个非常粗略的推导。

问题是找出：f(x) = x^2 − num=0 的根。
*/
class Solution {
    public boolean isPerfectSquare(int num) {
        if (num < 2)
            return true;

        long x = num / 2;
        while (x * x > num) {
            x = (x + num / x) / 2;
        }
        return (x * x == num);
    }
}

// Binary Search
class Solution {
    public boolean isPerfectSquare(int num) {
        if (num < 2) {
            return true;
        }
        long left = 2;
        long right = num / 2;
        long res;

        while (left <= right) {
            long mid = left + (right - left) / 2;
            res = (long) (mid * mid);
            if (res == num) {
                return true;
            } else if (res < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}

class Solution {
    // 1.开方取整，把得到的结果再平方仍然等于该数字，说明该数字一定是有效的完全平方数
    // 2.反之，如果该数不是完全平方数，开方后取整的数字会小于真实的开平方数字(浮点数)，所以平方后的结果必然小于原数字

    public boolean isPerfectSquare(int num) {
        int ans = sqrt(num);
        return ans * ans == num;
    }
};