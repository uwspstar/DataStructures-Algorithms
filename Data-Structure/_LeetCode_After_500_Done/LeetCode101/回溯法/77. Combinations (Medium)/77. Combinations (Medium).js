/*
给定一个整数 n 和一个整数 k，求在 1 到 n 中选取 k 个数字的所有组合方法。

Input: n = 4, k = 2
Output: [[2,4], [3,4], [2,3], [1,2], [1,3], [1,4]]
[1, 2, 3, 4]
*/
{
    const combine = (n, k) => {
        let res = [];
        let path = [];
        let visit = new Set();
        const backTracking = (idx) => {
            if (path.length === k) {
                res.push([...path]);
                return;
            }

            for (let i = idx; i <= n; i++) {
                if (visit.has(i)) continue;
                visit.add(i);
                path.push(i);
                backTracking(i);
                path.pop();
                visit.delete(i);
            }
        }

        backTracking(1);

        return res;
    }

    //[ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
    console.log(combine(4, 2));
}