// 239. Sliding Window Maximum
/*
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/
{
    // Sliding Window, Heap, Monotonic Queue
    // Return the max sliding window.

    var maxSlidingWindow = function (A, k) {
        const dq = [];
        const res = [];

        for (let i = 0; i < A.length; i++) {
            while (dq.length > 0 && A[i] >= A[dq[dq.length - 1]]) {
                dq.pop();
            }

            if (i - dq[0] + 1 > k) {
                dq.shift();
            }
            dq.push(i);

            if (i + 1 >= k) {
                res.push(A[dq[0]]);
            }
        }

        return result;
    }
}
{
    // Sliding Window, Heap, Monotonic Queue
    // Return the max sliding window.
    var maxSlidingWindow = function (nums, k) {
        const N = nums.length;
        let stk = [];
        let window = [];
        let res = [];
        for (let i = 0; i < N; i++) {
            while (stk.length > 0 && stk[stk.length - 1] < nums[i]) {
                stk.pop();
            }
            stk.push(nums[i]);
            window.push(nums[i]);

            while (window.length > k) {
                let tmp = window.shift();
                if (stk[0] === tmp) stk.shift();
            }

            while (stk.length > k) {
                let tmp = stk.shift();
            }

            if (window.length === k) {
                res.push(stk[0]);
            }
        }
        return res;
    };
    // Paint House II (H)
    // Jump Game VI (M)
}