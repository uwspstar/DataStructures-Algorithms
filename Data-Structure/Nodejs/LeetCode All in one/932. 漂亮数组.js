//932. 漂亮数组
/*
对于某些固定的 N，如果数组 A 是整数 1, 2, ..., N 组成的排列，使得：

对于每个 i < j，都不存在 k 满足 i < k < j 使得 A[k] * 2 = A[i] + A[j]。

那么数组 A 是漂亮数组。

 

给定 N，返回任意漂亮数组 A（保证存在一个）。

重点：终归结底， 归结于两个公式

如果{ X, Y, Z }是一个漂亮数组，则{ k * X + b, k * Y + b, k * Z + b } 也一定是漂亮数组
奇数 + 偶数 = 奇数 一定成立

作者：yexiso
链接：https://leetcode-cn.com/problems/beautiful-array/solution/c-fen-zhi-fa-dai-tu-pian-jie-shi-by-avphn4vwuo/
*/
{
    //分治思想

    const helper = arr => {
        if (arr.length === 1) return arr;

        let v1 = [];
        let v2 = [];

        for (let i = 0; i < arr.length; i += 2) {
            v1.push(arr[i]);
        }
        for (let i = 1; i < arr.length; i += 2) {
            v2.push(arr[i]);
        }

        v1 = helper(v1); //think about merge sort
        v2 = helper(v2);

        let res = [];

        for (let x of v1) {
            res.push(x);
        }
        for (let x of v2) {
            res.push(x);
        }
        return res;
    }
    var beautifulArray = function (n) {
        let res = [];
        for (let i = 1; i <= n; i++) {
            res.push(i);
        }
        return helper(res);
    };
}