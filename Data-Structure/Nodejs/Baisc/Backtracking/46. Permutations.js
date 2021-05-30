/*
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/
//Permutation with a arr
{
    var permuteBacktrack = function (nums) {
        const res = [];
        const backtrack = (path) => {

            if (path.length === nums.length) {
                res.push(path);
                return;
            };

            nums.forEach(n => {
                //console.log('path=', path, 'n=', n);
                if (path.indexOf(n) >= 0) return;
                //console.log('-----', n);
                let tmp = path.concat(n);
                //console.log('tmp=', tmp);
                backtrack(tmp);
            });
        };

        backtrack([]);
        return res;
    };

    console.log(permuteBacktrack([1, 2, 3]));
}
