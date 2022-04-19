// 1539. Kth Missing Positive Number
/*
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.

Example 1:
Input: arr = [2,3,4,7,11], k = 5 Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

Example 2:
Input: arr = [1,2,3,4], k = 2 Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
*/
{
    var findKthPositive = function (arr, k) {
        // currTotalMiss = arr[i] - i
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let midIdx = parseInt(left + (right - left) / 2);
            // If number of positive integers
            // which are missing before arr[pivot]
            // is less than k -->
            // continue to search on the right.
            let currTotalMiss = arr[midIdx] - midIdx - 1;
            //if (currTotalMiss === k) return arr[midIdx];
            if (currTotalMiss < k) {
                left = midIdx + 1;
            } else {
                right = midIdx - 1;
            }
        }
        // At the end of the loop, left = right + 1,
        // and the kth missing is in-between arr[right] and arr[left].
        // The number of integers missing before arr[right] is
        // arr[right] - right - 1 -->
        // the number to return is
        // arr[right] + k - (arr[right] - right - 1) = k + left
        return left + k;
    };
    // Append K Integers With Minimal Sum (M)
}