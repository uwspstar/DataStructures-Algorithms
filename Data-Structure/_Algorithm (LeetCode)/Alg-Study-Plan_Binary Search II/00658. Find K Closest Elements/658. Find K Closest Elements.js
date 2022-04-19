// 658. Find K Closest Elements
/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 

Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
Example 2:

Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
*/
{
    var findClosestElements = function (arr, k, x) {

        let res = [];
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = (left + right) >> 1;

            if (x - arr[mid] > arr[mid + k] - x) {
                left = mid + 1
            } else right = mid - 1;
        }

        return arr.slice(left, left + k);
    };
    // Guess Number Higher or Lower II (M)
    // Find K-th Smallest Pair Distance (H)
}