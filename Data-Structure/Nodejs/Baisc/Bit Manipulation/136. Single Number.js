//136. Single Number
/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
*/
//T:O(N) S:O(N)
{
    var hammingWeight = function (n) {
        let bits = 0;
        let mask = 1;
        for (let i = 0; i < 32; i++) {
            if ((n & mask) != 0) {
                bits++;
            }
            mask << 1; // 4 bytes * 8 bits = 32  (in java is int 4 bytes, byte(1), short(2), int(4), long(8))
        }
        return bits;
    };
}
// (a ^ b) ^ b = a。
// total b is even number, b is gone
{
    var singleNumber = function (arr) {
        let a = 0;
        for (let i = 0; i < arr.length; i++) {
            let b = arr[i]
            a = a ^ b;
        }
        return a;

    };
}
/*
Single Number II
Single Number III
Missing Number
Find the Duplicate Number
*/
/*
- https://www.zhihu.com/question/38206659

### 异或运算的规则是，如果两个数不同，结果为 1，否则为 0：

- 异或的符号是^。按位异或运算, 对等长二进制模式按位或二进制数的每一位执行逻辑按位异或操作。
- 操作的结果是如果某位不同则该位为 1, 否则该位为 0。
- 异或运算的逆运算是它本身，也就是说两次异或同一个数最后结果不变，即（a ^ b) ^ b = a。
- ^运算可以用于简单的加密，比如我想对我 MM 说 1314520，但怕别人知道，于是双方约定拿我的生日 19880516 作为密钥。1314520 ^ 19880516 = 20665500，我就把 20665500 告诉 MM。MM 再次计算 20665500 ^ 19880516 的值，得到 1314520，于是她就明白了我的企图。

```
n = 0 ^ 0; // 0
n = 0 ^ 1; // 1
n = 1 ^ 0; // 1
n = 1 ^ 1; // 0
```

- a ^ a = 0
*/