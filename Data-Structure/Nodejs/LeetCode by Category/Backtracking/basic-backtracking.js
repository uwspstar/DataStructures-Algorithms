//46. Permutations
//77. Combinations

{
    var combine = function (n, k) {
        let res = [];
        let path = [];

        const backTracking = (n, k, idx) => {
            if (path.length === k) {
                //res.push(path); // shallow copy not working
                res.push([...path]); // need A deep copy (see tips: 6 + 1 ways copy)
                return;
            } else { // i <= n - (k - path.length) + 1; 
                for (let i = idx; i <= n; i++) {
                    path.push(i);
                    backTracking(n, k, i + 1);
                    path.pop(i);
                }
            }
        }

        backTracking(n, k, 1);

        return res;
    };
    //39. Combination Sum
    //46. Permutations
}
