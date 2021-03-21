{
    // brute force
    const getMaxNum = (arr, start = 0, end = arr.length - 1) => {
        let maxNum = -Infinity;
        for (let i = start; i <= end; i++) {
            maxNum = Math.max(arr[i], maxNum);
        }
        return maxNum
    }
    var maxSlidingWindow = function (nums, k) {
        if (nums.length < 2) return nums;
        if (k < 2) return nums;
        let result = [];
        let p = k - 1;
        let maxNum = -Infinity;
        for (let i = 0; i <= p; i++) {
            maxNum = getMaxNum(nums, 0, p);
            result.push(maxNum);
        }
        //[1,3,-1,-3,5,3,6,7]
        for (let i = p + 1; i < nums.length; i++) {
            result.push(getMaxNum(nums, p + 1 - k, p));
        }
        return result;
    };
    let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
    console.log('maxSlidingWindow', maxSlidingWindow(nums, k));
}