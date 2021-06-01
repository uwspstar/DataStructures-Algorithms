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
                if (path.indexOf(n) >= 0) return; 
                let tmp = path.concat(n); 
                backtrack(tmp);
            });
        };

        backtrack([]);
        return res;
    };

    console.log(permuteBacktrack([1, 2, 3]));
}
{
    var permute = function (nums) {
        if (nums.length < 2) return [[...nums]];
        let res = [];
        let path = [];
        const backTrack = () => {
            if (path.length === nums.length) {
                res.push([...path]);
                return;
            } else {

                for (let i = 0; i < nums.length; i++) {
                    if (path.includes(nums[i])) continue;
                    path.push(nums[i]);
                    backTrack();
                    path.pop();
                }
            }
        }

        backTrack();
        return res;
    };
    //Permutation Sequence
}