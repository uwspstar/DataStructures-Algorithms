//[hard] 239. Sliding Window Maximum
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
 */

 var maxSlidingWindow = function(A, k) {
     let i = 0;
     let sum = 0;
     let ans = [];
     let window = 0
     for (let j = 0; j < A.length; j++) {
        sum += A[j];
        window += 1;
        while (window > k) {
            sum -= A[i];
            i++;
        }
        ans.push(sum);
     }
     return ans;
 }