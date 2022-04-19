// 852. Peak Index in a Mountain Array
/*
Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

Example 1:
Input: arr = [0,1,0] Output: 1

Example 2:
Input: arr = [0,2,1,0] Output: 1

Example 3:
Input: arr = [0,10,5,2] Output: 1
*/
{
    const peakIndexInMountainArray = arr => {
        const N = arr.length;
        let left = -1;
        let right = N
        let res = -1;

        while (left + 1 != right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] > arr[mid + 1]) {
                res = mid;
                right = mid;
            } else {
                left = mid;
            }
        }
        return res;
    }
    // Find in Mountain Array (H)
    // Minimum Number of Removals to Make Mountain Array (H)
}