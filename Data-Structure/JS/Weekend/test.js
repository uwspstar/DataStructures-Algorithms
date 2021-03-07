{
    const minSubArrayLen = (nums, target) => {
        if (nums.length === 0) return o;
        let fast = 0, slow = 0;
        let currentMaxSum = 0;// nums[fast];
        let minLen = nums.length + 1;
        while (fast < nums.length) {
            //currentMaxSum += nums[++fast]; 
            currentMaxSum += nums[fast];
            while (currentMaxSum >= target) {
                let currentLen = fast - slow + 1
                minLen = Math.min(minLen, currentLen);
                if (minLen === 1) return 1;
                currentMaxSum -= nums[slow++];
            }
            fast++;
        }
        return minLen > nums.length ? 0 : minLen;
    }
    console.log('minSubArrayLen-1', minSubArrayLen([1], 4)); //0
    console.log('minSubArrayLen-1', minSubArrayLen([1, 4, 4], 4)); //1
    console.log('minSubArrayLen-1', minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
    console.log('minSubArrayLen-1', minSubArrayLen([1, 4, 4], 3)); //1
    console.log('minSubArrayLen-1', minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); //0
}

{
    const minSubArrayLen = (nums, target) => {
        if (nums.length === 0) return 0;
        let minLen = nums.length + 1;
        let fast = 0;
        let slow = 0;
        let maxSum = nums[fast];
        while (fast < nums.length) {
            if (maxSum < target) {
                fast++; //NOT  nums[++fast]
                if (fast < nums.length) {
                    maxSum += nums[fast];
                    continue;
                }
            } else {
                let currentLen = fast - slow + 1;
                minLen = Math.min(minLen, currentLen);
                if (minLen === 1) return 1;
                maxSum -= nums[slow++]
            }
        }
        return minLen > nums.length ? 0 : minLen;
    }
    console.log('minSubArrayLen-1', minSubArrayLen([1], 4)); //0
    console.log('minSubArrayLen-1', minSubArrayLen([1, 4, 4], 4)); //1
    console.log('minSubArrayLen-1', minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
    console.log('minSubArrayLen-1', minSubArrayLen([1, 4, 4], 3)); //1
    console.log('minSubArrayLen-1', minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); //0
}

{
    const minSubArrayLen = (nums, target) => {
        if (nums.length === 0) return 0;
        let minLen = nums.length + 1;
        let fast = 0;
        let slow = 0;
        let maxSum = 0;//nums[fast];
        // [1,   4,    4], 4
        //            f=1,
        // s=0
        //max= 5
        //len =0
        while (fast < nums.length) {
            if (maxSum < target) {
                maxSum += nums[fast];
                fast++; // if ++fast > nums.length, the nums[++fast] undefined, not error
                continue;
            } else {
                minLen = Math.min(minLen, fast - slow + 1);
                maxSum -= nums[slow++]
            }
        }
        return minLen > nums.length ? 0 : minLen;
    }
    //console.log('minSubArrayLen-1', minSubArrayLen([1], 4)); //1
    //console.log('minSubArrayLen-1', minSubArrayLen([1, 4, 4], 4)); //1
    //console.log('minSubArrayLen-1', minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
    //console.log('minSubArrayLen-1', minSubArrayLen([1, 4, 4], 3)); //1
    //console.log('minSubArrayLen-1', minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); //0

}
/*
{
    console.log(undefined + 1);
    var minSubArrayLen = function (nums, target) {
        if (nums.length === 0) return o;
        let fast = 0, slow = 0;
        let currentMaxSum = 0 //nums[fast];
        let minLen = nums.length + 1;
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
}*/