// 90. Subsets II
/*
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 * 
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 
 * Input: nums = [1,2,2] Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * Input: nums = [0] Output: [[],[0]]
 */
{
    var subsetsWithDup = function (nums) {
        let res = [];
        let path = [];

        nums.sort((a, b) => a - b);

        const backTracking = (len, startIndex) => {
            if (path.length === len) {
                res.push([...path]);
                return;
            } else {
                for (let i = startIndex; i < nums.length; i++) {
                    //i > startIndex means moved next level BFS
                    if (i > startIndex && nums[i - 1] === nums[i]) continue; // DFS remove duplicate
                    path.push(nums[i]);
                    backTracking(len, i + 1);
                    path.pop();
                }
            }
        }

        for (let len = 0; len <= nums.length; len++) {
            backTracking(len, 0);
            console.log('len=', len, 'res=',res);
        }
        return res;
    };

    console.log(subsetsWithDup([1,2,2]))
    //Wiggle Sort
    //Sort Array by Increasing Frequency
    //Count Sorted Vowel Strings
}