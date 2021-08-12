//元素是有重复的: 难点在于：集合（数组candidates）有重复元素，但还不能有重复的组合。
var combinationSum2 = function (nums, target) {
    let res = [];
    let path = [];
    //首先把给candidates排序，让其相同的元素都挨在一起。
    nums.sort((a, b) => a - b); //重复元素 nums[i - 1] === nums[i]
    console.log('nums =', nums);
    const backTracking = (remain, startIdx) => {
        if (remain === 0) {
            res.push([...path]);
            return;
        } else if (remain < 0) {
            return;
        } else {
            for (let i = startIdx; i < nums.length; i++) {
                if (i > startIdx && nums[i - 1] === nums[i]) continue;
                path.push(nums[i]);
                console.log('backTracking (remain=', remain, ',startIdx=', startIdx, ')', 'nums[i]=', nums[i], 'i=', i);
                backTracking(remain - nums[i], i + 1); //not idx + 1
                path.pop();
            }
        }
    }
    backTracking(target, 0)
    return res;
};
let candidates = [10, 1, 2, 7, 6, 1, 5];
let target = 8;
console.log(combinationSum2(candidates, target));