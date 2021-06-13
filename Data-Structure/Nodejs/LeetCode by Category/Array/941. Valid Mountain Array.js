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
{
    //brute force O(N)
    var validMountainArray = function (arr) {
        let p = 0;
        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
                p = i;
                break;
            }
        }
        if (p === 0 || p === arr.length - 1) return false;
        for (let i = 1; i <= p; i++) {
            if (arr[i] <= arr[i - 1]) return false;
        }
        for (let i = p; i < arr.length - 1; i++) {
            if (arr[i] <= arr[i + 1]) return false;
        }
        return true;
    };
    //Minimum Number of Removals to Make Mountain Array
}
{
    var validMountainArray = function (arr) {
        let n = arr.length;
        let i = 0;

        while (arr[i] < arr[i + 1] && i + 1 < n) {
            i++;
        }

        if (i === 0 || i === n - 1) return false;

        while (arr[i] > arr[i + 1] && i + 1 < n) {
            i++;
        }

        return i === n - 1;
    };
    //Minimum Number of Removals to Make Mountain Array
}