
{


    var minSubArrayLen = function (nums, target) {
        let minLen = Infinity;
        let slow = 0;
        let fast = 0;
        let currentMaxSum = nums[fast];
        //[ 2,  3,  1,  2,  4,  3] , 7
        //[ 1,  1,  1,  1,  1,  1,  1,  1], 11
        //         f=2
        // s=0
        // m=0
        // minLen = Infinity
        while (fast < nums.length) {
            //console.log('slow=', slow, 'fast=', fast, 'currentMaxSum=', currentMaxSum, 'target=', target, 'minLen=', minLen);

            if (currentMaxSum < target) {
                currentMaxSum += nums[++fast];
                //fast++;
                //currentMaxSum = currentMaxSum + nums[fast];
                continue;
            } else {
                let currentLen = fast - slow + 1;
                minLen = Math.min(currentLen, minLen);
                if (minLen === 1) return minLen;
                currentMaxSum -= nums[slow++];
                //currentMaxSum = currentMaxSum - nums[slow]
                //slow++;
            }
        }
        return minLen === Infinity ? 0 : minLen;
    };
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 4)); //1
    console.log('minSubArrayLen', minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 3)); //1
    console.log('minSubArrayLen', minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); //0
}