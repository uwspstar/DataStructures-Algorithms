
{
    var findDisappearedNumbers = function (nums) {
        var len = nums.length
        for (var i = nums.length; i--;) {
          var n;
          while (nums[n = nums[i] - 1] !== nums[i]) {
            [nums[i], nums[n]] = [nums[n], nums[i]];
          }
        }
      
        var left = 0;
        var right = 0;
        for (; right < len; right++) {
          if (nums[right] - 1 !== right) {
            nums[left++] = right + 1;
          }
        }
      
        return nums.slice(0, left);
      };
}

{
    var maxSlidingWindow = function (nums, k) {
        const n = nums.length;
        const q = [];
        // [1, 3, -1, -3, 5, 3, 6, 7]
        for (let i = 0; i < k; i++) {
            console.log('q', q, 'i', i, 'q[q.length - 1]', q[q.length - 1]);
            console.log('nums[i]',  nums[i], 'nums[q[q.length - 1]]', nums[q[q.length - 1]]);
            
            while (q.length && nums[i] >= nums[q[q.length - 1]]) {
                q.pop();
            }
            q.push(i);
        }

        const ans = [nums[q[0]]];
        console.log('ans', ans, 'q[0]', q[0], 'nums[q[0]]', nums[q[0]]);
        for (let i = k; i < n; i++) {
            while (q.length && nums[i] >= nums[q[q.length - 1]]) {
                q.pop();
            }
            q.push(i);
            while (q[0] <= i - k) {
                q.shift();
            }
            ans.push(nums[q[0]]);
        }
        return ans;
    };
    let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
    console.log('maxSlidingWindow', maxSlidingWindow(nums, k));
}
{
    // brute force
    const getMaxNum = (arr, start = 0, end = arr.length - 1) => {

        let maxNum = -Infinity;
        for (let i = start; i <= end; i++) {
            maxNum = Math.max(arr[i], maxNum);
        }
        console.log('arr', JSON.stringify(arr), 'start', start, 'end', end, 'maxNum', maxNum);
        return maxNum;
    }

    var maxSlidingWindow = function (nums, k) {
        if (nums.length < 2) return nums;
        if (k < 2) return nums;
        let result = [];
        let maxNum = -Infinity;
        // [1,3,-1,-3,5,3,6,7]
        //  0    k  
        for (let i = 0; i < nums.length - k + 1; i++) {
            maxNum = getMaxNum(nums, i, i + k - 1);
            console.log('result', result, 'maxNum', maxNum);
            result.push(maxNum);
        }
        return result;
    };
    let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
    //console.log('maxSlidingWindow', maxSlidingWindow(nums, k));
}
