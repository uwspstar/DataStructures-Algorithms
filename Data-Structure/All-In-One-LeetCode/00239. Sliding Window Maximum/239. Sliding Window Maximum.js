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

https://www.youtube.com/watch?v=2SXqBsTR6a8
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                MaxQueue         Max
---------------               -----             ----
[1]  3  -1 -3  5  3  6  7       [1]      
[1  3]  -1 -3  5  3  6  7       [3]
[1  3  -1] -3  5  3  6  7       [3, -1]          3
 1 [3  -1  -3] 5  3  6  7       [-1, -3]         3
 1  3 [-1  -3  5] 3  6  7       [5]              5
 1  3  -1 [-3  5  3] 6  7       [5, 3]           5
 1  3  -1  -3 [5  3  6] 7       [6]             6
 1  3  -1  -3  5 [3  6  7]      [7]             7


*/
{
    var maxSlidingWindow = function (A, k) {
        const dq = []; // save idx
        const res = [];
        for (let i = 0; i < A.length; i++) {
            while (dq.length > 0 && A[i] >= A[dq[dq.length - 1]]) {
                // A[i] is new big; pop all pre item inside qu
                dq.pop();
            }

            // window over size
            if (i - dq[0] + 1 > k) {
                dq.shift();
            }

            dq.push(i);

            if (i + 1 >= k) {
                res.push(A[dq[0]]);
            }
        }
        return res;
    }


}