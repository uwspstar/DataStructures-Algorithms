//941. Valid Mountain Array
/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Input: arr = [2,1] Output: false
Input: arr = [3,5,5] Output: false
Input: arr = [0,3,2,1] Output: true
*/
class Solution {
    public boolean validMountainArray(int[] A) {
        if (A == null || A.length < 3) {
            return false;
        }

        boolean increasing = A[1] > A[0];

        // the mountain must at least start in an increasing manner
        if (!increasing) {
            return false;
        }
        for (int i = 1; i < A.length; i++) {
            if (A[i] == A[i - 1]) {
                return false; // plateaus are prohibited
            }
            if (increasing) {
                if (A[i] < A[i - 1]) {
                    increasing = false; // we reached the peak
                }
            } else {
                // every element must be decreasing, otherwise return false
                if (A[i] > A[i - 1]) {
                    return false;
                }
            }
        }

        // we can't just return true, we must ensure that a peak was reached at some
        // point.
        return !increasing;
    }
}
// Minimum Number of Removals to Make Mountain Array