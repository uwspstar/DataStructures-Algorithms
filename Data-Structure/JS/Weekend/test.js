{
    const minSubArrayLen = (nums, target) => {
        if (nums.length === 0) return 0;
        let fast = 0, slow = 0;
        let minLen = nums.length + 1;
        let currentMaxSum = 0;
        while (fast < nums.length) {
            currentMaxSum += nums[fast];
            while (currentMaxSum >= target) {
                minLen = Math.min(minLen, fast - slow + 1);
                if (minLen === 1) return 1;
                currentMaxSum -= nums[slow++];
            }
            fast++;
        }
        return minLen > nums.length ? 0 : minLen;
    }

    console.log('minSubArrayLen-1', minSubArrayLen([1], 4)); //0
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 4)); //1
    console.log('minSubArrayLen', minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 3)); //1
    console.log('minSubArrayLen', minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); //0
}

{
    //console.log(undefined + 1);
    var minSubArrayLen = function (nums, target) {
        if (nums.length === 0) return o;
        let fast = 0, slow = 0;
        let currentMaxSum = 0 //nums[fast];
        let minLen = nums.length + 1; // ****
        //console.log('nums[100000]', nums[100000]);
        //console.log('nums[100000] + 1', nums[100000] + 1);
        //let temp = ++fast;
        //console.log('(nums[++fast]', nums[temp], 'fast', fast,);
        while (fast < nums.length) {
            //currentMaxSum += nums[++fast]; //nums[++fast] can be NaN
            currentMaxSum += nums[fast];
            while (currentMaxSum >= target) {
                let currentLen = fast - slow + 1;
                minLen = Math.min(minLen, currentLen);
                if (minLen === 1) return 1;
                currentMaxSum -= nums[slow++];
            }
            fast++;
        }
        return minLen > nums.length ? 0 : minLen;
    }

    console.log('minSubArrayLen-1', minSubArrayLen([1], 4)); //0
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 4)); //1
    console.log('minSubArrayLen', minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 3)); //1
    console.log('minSubArrayLen', minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); //0

}