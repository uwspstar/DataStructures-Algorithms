/*
560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
*/
{
    //**** continuous subarrays ****
    var subarraySum = function (nums, k) {
        const map = new Map();
        map.set(0, 1); // why ?
        //细节，这里需要预存前缀和为 0 的情况，会漏掉前几位就满足的情况
        //例如输入[1,1,0]，k = 2 如果没有这行代码，则会返回0,漏掉了1+1=2，和1+1+0=2的情况
        //输入：[3,1,1,0] k = 2时则不会漏掉
        //因为presum[3] - presum[0]表示前面 3 位的和，所以需要map.put(0,1),垫下底
        let pre = 0;
        let count = 0;
        for (let x of nums) {
            pre += x;
            //当前前缀和已知，判断是否含有 presum - k的前缀和，那么我们就知道某一区间的和为 k 了。
            map.has(pre - k) ? count += map.get(pre - k) : {}
            map.has(pre) ? map.set(pre, map.get(pre) + 1) : map.set(pre, 1);
        }
        return count;
    };
}

//if ask not total number of continuous subarrays whose sum equals to k.
//brute force, find all the cases, sum = k, backTracking
{
    const subarraySum = (nums, k) => {

        let res = [];
        let path = [];
        const backTracking = (remain, startIndex) => {
            if (remain === 0) {
                res.push([...path]);
                return;
            } else if (remain < 0) {
                return;
            } else {
                for (let i = startIndex; i < nums.length; i++) {
                    path.push(nums[i]);
                    backTracking(remain - nums[i], i + 1)
                    path.pop();
                }
            }
        }
        backTracking(k, 0);
        let count = res.length; //
        console.log('count = ', count, 'res = ', res);
        return res;
    }

    console.log(subarraySum([1,1,1],2))//3
    console.log(subarraySum([1,2,3],3))//2
}