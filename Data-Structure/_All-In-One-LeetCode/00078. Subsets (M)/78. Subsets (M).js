//78. Subsets (M)
/* Input: nums = [1,2,3] Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] */
var subsets = function (nums) {
    const res = [];
    const path = [];
    const backtrack = (len, start) => {
        if (path.length === len) {
            res.push([...path]);
            return;
        } else {
            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(len, i + 1)
                path.pop();
            }
        }

    };

    for (let i = 0; i <= nums.length; i++) {
        backtrack(i, 0);
    }
    return res;
};