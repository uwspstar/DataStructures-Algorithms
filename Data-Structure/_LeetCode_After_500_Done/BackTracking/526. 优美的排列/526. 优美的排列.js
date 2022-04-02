/*
https://leetcode-cn.com/problems/beautiful-arrangement/
假设有从 1 到 n 的 n 个整数。用这些整数构造一个数组 perm（下标从 1 开始），只要满足下述条件 之一 ，该数组就是一个 优美的排列 ：

输入：n = 2
输出：2
解释
perm[i] 能够被 i 整除
i 能够被 perm[i] 整除
给你一个整数 n ，返回可以构造的 优美排列 的 数量 。
第 1 个优美的排列是 [1,2]：
    - perm[1] = 1 能被 i = 1 整除
    - perm[2] = 2 能被 i = 2 整除
第 2 个优美的排列是 [2,1]:
    - perm[1] = 2 能被 i = 1 整除
    - i = 2 能被 perm[2] = 1 整除

*/
{
    /**
 * @param {number} n
 * @return {number}
 */
    //1, 2,..., n
    var countArrangement = function (n) {
        let ans = 0;
        let vis = new Set(); // now duplicate
        //let path = [];
        const backTracking = (idx) => {
            if (idx === n + 1) {
                //console.log('path --->: ', path);
                ans++;
                return;
            }
            for (let i = 1; i <= n; i++) {
                // 只要满足下述条件 之一 ，该数组就是一个 优美的排列 ：
                // perm[i] 能够被 i 整除
                // i 能够被 perm[i] 整除
                if (!vis.has(i) && (idx % i == 0 || i % idx == 0)) {
                    vis.add(i);
                    //path.push(i)
                    backTracking(idx + 1);
                    //path.pop();
                    vis.delete(i)
                }

            }
        }

        backTracking(1); // start with 1;
        return ans;
    };
}
{
    var countArrangement = function (n) {
        let ans = 0;
        let vis = new Set(); // now duplicate
        let path = [];
        const backTracking = (idx) => {
            if (idx === n + 1) {
                console.log('path --->: ', path);
                ans++;
                return;
            }

            for (let i = 1; i <= n; i++) {
                // 只要满足下述条件 之一 ，该数组就是一个 优美的排列 ：
                // perm[i] 能够被 i 整除
                // i 能够被 perm[i] 整除
                if (!vis.has(i) && (idx % i == 0 || i % idx == 0)) {
                    vis.add(i);
                    path.push(i)
                    backTracking(idx + 1);
                    path.pop();
                    vis.delete(i)
                }

            }
        }

        backTracking(1); // start with 1;
        return ans;
    };

    console.log(countArrangement(5));
}
/*
path --->:  [ 1, 2, 3, 4, 5 ]
path --->:  [ 1, 4, 3, 2, 5 ]
path --->:  [ 2, 1, 3, 4, 5 ]
path --->:  [ 2, 4, 3, 1, 5 ]
path --->:  [ 3, 2, 1, 4, 5 ]
path --->:  [ 3, 4, 1, 2, 5 ]
path --->:  [ 4, 1, 3, 2, 5 ]
path --->:  [ 4, 2, 3, 1, 5 ]
path --->:  [ 5, 2, 3, 4, 1 ]
path --->:  [ 5, 4, 3, 2, 1 ]
*/