/*
给定一个无重复数字的整数数组，求其所有的排列方式
Input: [1,2,3]
Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,2,1], [3,1,2]]
*/

{


    const permute = arr => {
        let res = [];
        let path = [];

        let N = arr.length;
        if (N < 1) return res.push(arr);

        let visit = new Set();

        const backTracking = (N, arr) => {
            if (path.length === N) {
                res.push([...path]);
                return;
            }

            for (let i = 0; i < N; i++) {
                if (visit.has(arr[i])) continue;

                visit.add(arr[i]);
                path.push(arr[i]);
                backTracking(N, arr);
                path.pop();
                visit.delete(arr[i]);
            }
        }

        backTracking(N, arr);

        return res;
    }
    //[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    console.log(permute([1, 2, 3]))

}