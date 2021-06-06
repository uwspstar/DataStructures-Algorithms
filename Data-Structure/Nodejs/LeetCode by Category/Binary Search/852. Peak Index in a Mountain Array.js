//852. Peak Index in a Mountain Array
/*
Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]. 

Input: arr = [0,1,0] Output: 1 
Input: arr = [0,2,1,0] Output: 1 
Input: arr = [0,10,5,2] Output: 1
Input: arr = [3,4,5,1] Output: 2
*/
{
    var peakIndexInMountainArray = function (arr) {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            
            if (arr[mid] < arr[mid + 1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}
//Find in Mountain Array
//Minimum Number of Removals to Make Mountain Array
{
    var peakIndexInMountainArray = function (arr) {
        let i = 0;
        while (arr[i] < arr[i + 1]) {
            i++;
        }
        return i;
    };
}