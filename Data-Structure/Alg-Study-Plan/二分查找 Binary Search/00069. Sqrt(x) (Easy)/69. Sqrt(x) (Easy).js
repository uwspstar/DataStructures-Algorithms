//69. Sqrt(x) (Easy)
// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

//给定一个非负整数，求它的开方，向下取整。
/*
我们可以把这道题想象成，给定一个非负整数 a，求 f (x) = x2 − a = 0 的解。因为我们只考 虑 x ≥ 0，所以 f(x) 在定义域上是单调递增的。考虑到 f(0) = −a ≤ 0，f(a) = a2 − a ≥ 0，我们 可以对 [0, a] 区间使用二分法找到 f (x) = 0 的解。 在以下的代码里，为了防止除以 0，我们把 a = 0 的情况单独考虑，然后对区间 [1, a] 进行二 分查找。我们使用了左闭右闭的写法。
*/
{
    const mySqrt = x => {
        let res = -1;
        let left = 0;
        let right = x;

        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2);

            if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
                res = mid;
                break;
            }

            if (mid * mid < x) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
}