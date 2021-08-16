//78. Subsets
/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Input: nums = [1,2,3] Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Input: nums = [0] Output: [[],[0]]
*/
//如果把 子集问题、组合问题、分割问题都抽象为一棵树的话，那么组合问题和分割问题都是收集树的叶子节点，而子集问题是找树的所有节点！
//那么既然是无序，取过的元素不会重复取，写回溯算法的时候，for就要从startIndex开始，而不是从0开始！
{
    var subsets = function (nums) {
        let res = [];
        let path = [];

        const backTracking = (startIndex, len) => {
            if (path.length === len) {
                res.push([...path]);
                return;
            }
            for (let i = startIndex; i < nums.length; i++) {
                path.push(nums[i]);
                backTracking(i + 1, len);
                path.pop();
            }
        }
        for (let len = 0; len <= nums.length; len++) {
            backTracking(0, len); // 子集 len = 0, 1, 2
        }
        return res;
    };
}
{
    var subsets = function (nums) {
        const res = [];

        const backtrack = (path, len, startIndex) => {
            if (path.length === len) {
                res.push([...path]);
                return;
            } else {
                for (let i = startIndex; i < nums.length; i++) {
                    path.push(nums[i]);
                    backtrack(path, len, i + 1)
                    path.pop();
                }
            }
        };

        for (let len = 0; len <= nums.length; len++) {
            backtrack([], len, 0);
        }
        return res;
    };
    //Subsets II
    //Generalized Abbreviation
    //Letter Case Permutation
}

{
    var subsets = function (nums) {
        let res = [];
        let path = [];
        let k = nums.length;

        const backTracking = (startIndex) => {
            if (path.length <= k) {
                res.push([...path]);
                //return; cannot use return here
            }
            console.log('res=', res);

            for (let i = startIndex; i < nums.length; i++) {
                path.push(nums[i]);
                console.log('backTracking(startIndex=', startIndex + 1, ')', 'path=', path);
                backTracking(i + 1);
                path.pop();
            }
        }
        backTracking(0);

        return res;
    };
}
{
    var subsets = function (nums) {
        let res = [];
        let path = [];
        //let k = nums.length;
        const backTracking = (startIndex) => {
            /*
            if (path.length <= k) {
                res.push([...path]);
                //return; //cannot use return here
            }*/
            res.push([...path]);
            for (let i = startIndex; i < nums.length; i++) {
                path.push(nums[i]);
                console.log('backTracking(startIndex=', startIndex + 1, ')', 'path=', path);
                backTracking(i + 1);
                path.pop();
            }
        }
        backTracking(0);

        return res;
    };
}