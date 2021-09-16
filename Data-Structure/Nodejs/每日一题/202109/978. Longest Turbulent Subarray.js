//978. Longest Turbulent Subarray
/*
Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

For i <= k < j:
arr[k] > arr[k + 1] when k is odd, and
arr[k] < arr[k + 1] when k is even.
Or, for i <= k < j:
arr[k] > arr[k + 1] when k is even, and
arr[k] < arr[k + 1] when k is odd. 

Input: arr = [9,4,2,10,7,8,8,1,9] Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5] 

Input: arr = [4,8,12,16] Output: 2 

Input: arr = [100] Output: 1
*/
{
    var maxTurbulenceSize = function (arr) {
        let res = 1;
        let odd = 1;
        let even = 1;
        for (let k = 0; k < arr.length; k++) {
            if (k % 2 === 1) {
                odd = arr[k] > arr[k + 1] ? odd + 1 : 1; // 1 means reset
                even = arr[k] < arr[k + 1] ? even + 1 : 1;// 1 means reset
            } else {
                odd = arr[k] < arr[k + 1] ? odd + 1 : 1;
                even = arr[k] > arr[k + 1] ? even + 1 : 1;
            }
            res = Math.max(res, odd, even);
        }
        return res
    };
}