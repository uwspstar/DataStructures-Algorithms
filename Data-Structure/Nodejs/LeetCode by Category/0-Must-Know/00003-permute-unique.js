{
    //Input: nums = [1,1,2] Output: [[1,1,2],[1,2,1],[2,1,1]]
    const permuteUnique = nums =>{
        let res = [];
        nums.sort((a, b) => a - b);
        let visit = Array(nums.length).fill(false);

        //console.log(visit);
        const backTrack = arrPath => {
            if (arrPath.length === nums.length) {
                res.push(arrPath);
            } else {
                for (let i = 0; i < nums.length; i++) {
                    if (visit[i] || ( i > 0 && nums[i] === nums[i - 1] && !visit[i - 1])) continue;
                    visit[i] = true; // backtracking reset status
                    backTrack(arrPath.concat(nums[i]));
                    visit[i] = false;
                }
            }
        }
        backTrack([])
        return res
    }

    console.log(permuteUnique([1,2,3]));
    console.log(permuteUnique([1,1,2])); //[ [ 1, 1, 2 ], [ 1, 2, 1 ], [ 2, 1, 1 ] ]
}
/*
[[ 1, 2, 3 ], [ 1, 3, 2 ],  [ 2, 1, 3 ], [ 2, 3, 1 ], [ 3, 1, 2 ], [ 3, 2, 1 ]]
*/