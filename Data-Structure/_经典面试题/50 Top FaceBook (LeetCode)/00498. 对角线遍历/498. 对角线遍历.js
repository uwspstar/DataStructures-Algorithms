/*
根据题目描述，首先仔细找一下这道题中一些数字上的规律。
（可以结合题目给的图来看）

得知：

每一趟对角线中元素的坐标（x, y）相加的和是递增的。
第一趟：1 的坐标(0, 0)。x + y == 0。
第二趟：2 的坐标(1, 0)，4 的坐标(0, 1)。x + y == 1。
第三趟：7 的坐标(0, 2), 5 的坐标(1, 1)，3 的坐标(2, 0)。第三趟 x + y == 2。
第四趟：……

每一趟都是 x 或 y 其中一个从大到小（每次-1），另一个从小到大（每次+1）。
第二趟：2 的坐标(1, 0)，4 的坐标(0, 1)。x 每次-1，y 每次+1。
第三趟：7 的坐标(0, 2), 5 的坐标(1, 1)，3 的坐标(2, 0)。x 每次 +1，y 每次 -1。

确定初始值。例如这一趟是 x 从大到小， x 尽量取最大，当初始值超过 x 的上限时，不足的部分加到 y 上面。
第二趟：2 的坐标(1, 0)，4 的坐标(0, 1)。x + y == 1，x 初始值取 1，y 取 0。
第四趟：6 的坐标(2, 1)，8 的坐标(1, 2)。x + y == 3，x 初始值取 2，剩下的加到 y上，y 取 1。

确定结束值。例如这一趟是 x 从大到小，这一趟结束的判断是， x 减到 0 或者 y 加到上限。
第二趟：2 的坐标(1, 0)，4 的坐标(0, 1)。x 减到 0 为止。
第四趟：6 的坐标(2, 1)，8 的坐标(1, 2)。x 虽然才减到 1，但是 y 已经加到上限了。

这一趟是 x 从大到小，那么下一趟是 y 从大到小，循环进行。 并且方向相反时，逻辑处理是一样的，除了x，y和他们各自的上限值是相反的。
x 从大到小，第二趟：2 的坐标(1, 0)，4 的坐标(0, 1)。x + y == 1，x 初始值取 1，y 取 0。结束值 x 减到 0 为止。
x 从小到大，第三趟：7 的坐标(0, 2)，5 的坐标(1, 1)，3 的坐标(2, 0)。x + y == 2，y 初始值取 2，x 取 0。结束值 y 减到 0 为止。

https://leetcode-cn.com/problems/diagonal-traverse/solution/dui-jiao-xian-bian-li-fen-xi-ti-mu-zhao-zhun-gui-l/

*/
{
    var findDiagonalOrder = function (matrix) {
        let nums = [];
        let M = matrix.length;
        if (M == 0) return nums;
        let N = matrix[0].length;
        if (N == 0) return nums;

        let bXFlag = true;

        for (let i = 0; i < M + N - 1; i++) {
            let pm = bXFlag ? M : N;
            let pn = bXFlag ? N : M;

            let x = (i < pm) ? i : pm - 1;
            let y = i - x;

            while (x >= 0 && y < pn) {
                let tmp = bXFlag ? matrix[x][y] : matrix[y][x];
                nums.push(tmp);
                x--;
                y++;
            }

            bXFlag = !bXFlag;
        }
        return nums;
    };
}