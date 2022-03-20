// 69. Sqrt(x) (Easy)
//给定一个非负整数，求它的开方，向下取整。
/*
我们可以把这道题想象成，给定一个非负整数 a，求 f (x) = x2 − a = 0 的解。因为我们只考 虑 x ≥ 0，所以 f(x) 在定义域上是单调递增的。考虑到 f(0) = −a ≤ 0，f(a) = a2 − a ≥ 0，我们 可以对 [0, a] 区间使用二分法找到 f (x) = 0 的解。 在以下的代码里，为了防止除以 0，我们把 a = 0 的情况单独考虑，然后对区间 [1, a] 进行二 分查找。我们使用了左闭右闭的写法。
*/
int mySqrt(int a)
{
    if (a == 0)
        return a;
    int l = 1, r = a, mid, sqrt;
    while (l <= r)
    {
        mid = l + (r - l) / 2;
        sqrt = a / mid;
        if (sqrt == mid)
        {
            return mid;
        }
        else if (mid > sqrt)
        {
            r = mid - 1;
        }
        else
        {
            l = mid + 1;
        }
    }
    return r;
}
/*
另外，这道题还有一种更快的算法——牛顿迭代法，其公式为 xn+1 = xn − f (xn)/ f ′(xn)。给 定 f (x) = x2 − a = 0，这里的迭代公式为 xn+1 = (xn + a/xn)/2，其代码如下。

int mySqrt(int a) {
       long x = a;
       while (x * x > a) {
          x = (x + a / x) / 2;
}
return x; }

*/