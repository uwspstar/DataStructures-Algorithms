//77. Combinations (M)
/* Input: n = 4, k = 2 Output: [[2,4], [3,4], [2,3], [1,2], [1,3],[1,4],] */
var combine = function (n, k) {
    let res = [];
    let path = [];
    const backTracking = (idx) => {
        if (path.length === k) {
            //res.push(path); // shallow copy not working
            res.push([...path]); // need A deep copy
        } else {
            for (let i = idx; i <= n; i++) {
                path.push(i);
                backTracking(i + 1);
                path.pop(i);
            }
        }
    }
    backTracking(1);
    return res;
};